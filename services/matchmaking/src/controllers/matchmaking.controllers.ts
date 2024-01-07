import { FastifyReply, FastifyRequest } from "fastify";
import { IMatchmaking } from "interfaces";
import type * as s from 'zapatos/schema'
import * as db from 'zapatos/db'
import {pool} from '../db/pgPool'
import axios from 'axios';

export var listMatchmakings = 
  async (request: FastifyRequest, reply: FastifyReply) => {
    let result = db.sql<s.matchmaking.SQL, s.matchmaking.Selectable[]>`SELECT * FROM ${"matchmaking"}`
    .run(pool)
    return reply.send(await result)
}

export var listopenmatches = 
  async (request: FastifyRequest, reply: FastifyReply) => {
    let result = db.sql<s.matchmaking.SQL, s.matchmaking.Selectable[]>`SELECT * FROM ${"matchmaking"} WHERE open=true AND match_create=false`
    .run(pool)
    return reply.send(await result)
}

export const create_matchmaking = async (request: FastifyRequest, reply: FastifyReply) => {
    let obj: any = request.body;
    let match_create = false;
    const matchmakingCount= await db.sql`SELECT COUNT(*) FROM ${"matchmaking"}`.run(pool);
    let id : number = matchmakingCount[0].count;
    const {
        p1,
        p2
      } = obj;
    if (p2 !== undefined) {
      const messagesServerUrl = 'http://0.0.0.0:5006/api/messages/sent_message';
      let content = `Player ${p1} has sent you an invitation to a match, the matchmaking number is ${id}`;
      let messageData = {
        from_id: p1,  
        to_id: p2,    
        content: content,
      };
      try {
        const response = await axios.post(messagesServerUrl, messageData);
    
        if (response.status === 200) {
          console.log('Message sent successfully.');
        } else {
          console.error('Error sending message', response.status, response.data);
        }
      } catch (error) {
        console.error('Error sending message', error.message);
      }
      let open = false
      let date = new Date();
      let ajd = (date.getMonth()+1)+"/"+ date.getDate()+"/"+date.getFullYear();
      return db.sql<s.matchmaking.SQL, s.matchmaking.Selectable[]>`INSERT INTO ${"matchmaking"} VALUES (${db.param(id)}, ${db.param(p1)}, ${db.param(ajd)}, ${db.param(open)}, ${db.param(p2)}, ${db.param(match_create)})`
      .run(pool)
    }else{
      let p2 = null
      let open = true
      let date = new Date();
      let ajd = (date.getMonth()+1)+"/"+ date.getDate()+"/"+date.getFullYear();
      return db.sql<s.matchmaking.SQL, s.matchmaking.Selectable[]>`INSERT INTO ${"matchmaking"} VALUES (${db.param(id)}, ${db.param(p1)}, ${db.param(ajd)}, ${db.param(open)}, ${db.param(p2)}, ${db.param(match_create)})`
      .run(pool)
    } 
}

export const join_match = async (request: FastifyRequest, reply: FastifyReply) => {
  let obj: any = request.body;
  const {
      matchmaking,
      player
    } = obj;
  const matchmakingNumber = Number(matchmaking);
  const result = await db.sql`SELECT * FROM ${"matchmaking"} WHERE id = ${db.param(matchmakingNumber)}`.run(pool);

  if (result.length > 0) {
    const open: boolean = result[0].open;
    const p1:number = result[0].p1;
    const match_create = result[0].match_create;
  
    if (open === false) {
      if (match_create === false){
        const p2: number = result[0].p2;
        if (p2 == player){
          //create_match
          const matchServerUrl = 'http://0.0.0.0:5000/api/matches/create_match';
          let matchData = {
            player1: p1,
            player2: p2,
          };
          try {
            const response = await axios.post(matchServerUrl, matchData);
        
            if (response.status === 200) {
              console.log('match created successfully.');
            } else {
              console.error('Error creating match', response.status, response.data);
            }
          } catch (error) {
            console.error('Error creating match', error.message);
          }
          await db.sql`UPDATE ${"matchmaking"} SET match_create = true WHERE id = ${db.param(matchmakingNumber)}`.run(pool);
        }
        else{
          console.error('Sorry, you do not have invitation! ');
        }
      }
    }
    else{
      if(match_create === false){
          //create_match
          const matchServerUrl = 'http://0.0.0.0:5000/api/matches/create_match';
          let matchData = {
            player1: p1,
            player2: player
          };
          try {
            const response = await axios.post(matchServerUrl, matchData);
        
            if (response.status === 200) {
              console.log('match created successfully.');
            } else {
              console.error('Error creating match', response.status, response.data);
            }
          } catch (error) {
            console.error('Error creating match', error.message);
          }
          await db.sql`UPDATE ${"matchmaking"} SET match_create = true WHERE id = ${db.param(matchmakingNumber)}`.run(pool);
          await db.sql`UPDATE ${"matchmaking"} SET p2 = ${player} WHERE id = ${db.param(matchmakingNumber)}`.run(pool);
        }
      }
  } else {
    console.error('Invalid matchmaking number! ');
  }
}



