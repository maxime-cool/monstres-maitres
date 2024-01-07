import { FastifyReply, FastifyRequest } from "fastify";
import { IMatch } from "interfaces";
import type * as s from 'zapatos/schema'
import * as db from 'zapatos/db'
import {pool} from '../db/pgPool'
import axios from 'axios';

export var listMatches = 
  async (request: FastifyRequest, reply: FastifyReply) => {
    let result = db.sql<s.matches.SQL, s.matches.Selectable[]>`SELECT * FROM ${"matches"}`
    .run(pool)
    return reply.send(await result)
}

export const get_details_match = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    const id: number = parseInt(request.params.id, 10);
    if (isNaN(id)) {
        return reply.status(400).send({ error: 'Invalid user ID.' });
      }
    let result = db.sql<s.matches.SQL, s.matches.Selectable[]>`SELECT * FROM ${"matches"} WHERE ${"id"}=${db.param(id)}`
    .run(pool)
    return reply.send(await result)
}

export const create_match = async (request: FastifyRequest, reply: FastifyReply) => {
    let obj: any = request.body;
    const {
        player1,
        player2
      } = obj;
    const matchCount= await db.sql`SELECT COUNT(*) FROM ${"matches"}`.run(pool);
    let id : number = matchCount[0].count;
    let status = "in progress";
    let round = 0;
    let winner = 0;
    let date = new Date();
    let ajd = (date.getMonth()+1)+"/"+ date.getDate()+"/"+date.getFullYear();
    return db.sql<s.matches.SQL, s.matches.Selectable[]>`INSERT INTO ${"matches"} VALUES (${db.param(id)}, ${db.param(status)}, ${db.param(player1)}, ${db.param(player2)},${db.param(round)}, ${db.param(winner)}, ${db.param(ajd)})`
    .run(pool)
}

export const play_match = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    const matchId: number = parseInt(request.params.id, 10);
    const num: number = 5;
    
    const result = await db.sql`SELECT * FROM ${"matches"} WHERE id = ${db.param(matchId)}`.run(pool); 
    if (result.length > 0) {
        const player1:number = result[0].p1;
        const player2:number = result[0].p2;

        let i = 0;
        let count = 0;
        let obj: any = request.body;
        const {
            monster1,
            monster2
        } = obj;
        while (i<num) {
            const roundcreateServerUrl = `http://0.0.0.0:5002/api/rounds/new_round/${matchId}`;
            let roundData = {
                p1: player1,
                p2: player2,
                monstre_p1: monster1,
                monstre_p2: monster2,
            };
            try {
                const response = await axios.post(roundcreateServerUrl, roundData);
                console.log(monster1)
                if (response.status === 200) {
                  console.log('new round created successfully.');
                  await db.sql`UPDATE ${"matches"} SET current_round = ${db.param(i+1)} WHERE id = ${db.param(matchId)}`.run(pool);
                  const serverUrl = `http://0.0.0.0:5002/api/rounds/update/${matchId}/${i}`;
                  try{
                    let response = await axios.put(serverUrl, {});
                    if (response.status === 200){
                        console.log('round finished successfully.');
                        let round_details = response.data;
                        let winner:number = round_details.winner;
                        if (winner === player1) count = count + 1;
                        i = i+1;
                    }else{
                        console.error('Error playing round', response.status, response.data);
                    }
                  }catch (error) {
                    console.error('Error playing round', error.message);
                  }
                } else {
                  console.error('Error creating round', response.status, response.data);
                }
            } catch (error) {
            console.error('Error creating round', error.message);
            }
        }
        let status = "finished"
        if  (count>=3){
            let date = new Date();
            let ajd = (date.getMonth()+1)+"/"+ date.getDate()+"/"+date.getFullYear();
            //status, winner, end_at update 
            await db.sql`UPDATE ${"matches"} SET status = ${db.param(status)}, winner = ${db.param(player1)}, ended_at = ${db.param(ajd)} WHERE id = ${db.param(matchId)}`.run(pool);
        }else{
            let date = new Date();
            let ajd = (date.getMonth()+1)+"/"+ date.getDate()+"/"+date.getFullYear();
            //status, winner, end_at update 
            await db.sql`UPDATE ${"matches"} SET status = ${db.param(status)}, winner = ${db.param(player2)}, ended_at = ${db.param(ajd)} WHERE id = ${db.param(matchId)}`.run(pool);
        }
    }else{
        console.error('Invalid match ID');
    }
};
