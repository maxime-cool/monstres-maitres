import { FastifyReply, FastifyRequest } from "fastify";
import { IMatch } from "interfaces";
import type * as s from 'zapatos/schema'
import * as db from 'zapatos/db'
import {pool} from '../db/pgPool'


interface QueryParams {
    matchId?: number | undefined;
    player1?: string | undefined;
    player2?: string | undefined;
    roundNumber?: number | undefined;
    monster1?: string | undefined;
    monster2?: string | undefined;
}

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
    let status = "waiting";
    let round = 0;
    let winner = 0;
    let date = new Date();
    let ajd = (date.getMonth()+1)+"/"+ date.getDate()+"/"+date.getFullYear();
    return db.sql<s.matches.SQL, s.matches.Selectable[]>`INSERT INTO ${"matches"} VALUES (${db.param(id)}, ${db.param(status)}, ${db.param(player1)}, ${db.param(player2)},${db.param(round)}, ${db.param(winner)}, ${db.param(ajd)})`
    .run(pool)
}

export const join_match = async (request: FastifyRequest, reply: FastifyReply) => {
    let obj:any = request.body;
    const{
        matchId,
        user
    } = obj;
    const id :number = parseInt(matchId, 10);
    if (isNaN(id)) {
        return reply.status(400).send({ error: 'Invalid user ID.' });
    }
    let player2 = db.sql<s.matches.SQL, s.matches.Selectable[]>`SELECT p2 FROM ${"matches"} WHERE ${"id"}=${db.param(id)}`
    .run(pool)
    if((await player2)[0].p2 == user){
        db.sql<s.matches.SQL, s.matches.Selectable[]>`UPDATE ${"matches"} SET ${"status"} = 'in progress' where ${"id"}=${db.param(id)} `.run(pool)
        return db.sql<s.matches.SQL, s.matches.Selectable[]>`SELECT * FROM ${"matches"} WHERE ${"id"}=${db.param(id)}`.run(pool)
    }else{
        return reply.status(400).send({ error: 'Invalid without invitation.' });
    }
}

async function callRemoteServer(remoteServerUrl: string, method: string = 'GET', queryParams: Record<string, string> = {}) {
    try {
        const queryString = Object.keys(queryParams)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key]))
            .join('&');

        const urlWithParams = `${remoteServerUrl}?${queryString}`;

        const response = await fetch(urlWithParams, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data:any = await response.json();
        console.log('Response from remote server:', data);
        return data;
    } catch (error) {
        console.error('Error calling remote server:', error);
    }
}

export const play_match = async (request: FastifyRequest<{ Params: { id: string }; Querystring: QueryParams }>, reply: FastifyReply) => {
    const pollInterval = 30000; // 30 seconds
    let isPolling = true;
    const matchId: number = parseInt(request.params.id, 10);
    const num: number = 5;
    let player1 = db.sql<s.matches.SQL, s.matches.Selectable[]>`SELECT p1 FROM ${"matches"} WHERE ${"id"}=${db.param(matchId)}`
    .run(pool)
    let player2 = db.sql<s.matches.SQL, s.matches.Selectable[]>`SELECT p2 FROM ${"matches"} WHERE ${"id"}=${db.param(matchId)}`
    .run(pool)

    let i = 1;

    while (i<=num) {
        const queryParams: QueryParams = {
            matchId: matchId,
            roundNumber: i,
            player1: (await player1).toString(),
            player2: (await player2).toString(),
            monster1: request.query.monster1,
            monster2: request.query.monster2,
        };

        const sanitizedParams: Record<string, string> = Object.fromEntries(
            Object.entries(queryParams).map(([key, value]) => [key, value === undefined ? '' : value.toString()])
        );

        // Use sanitizedParams in your callRemoteServer function or other logic
        await callRemoteServer('http://0.0.0.0:5001/api/rounds/new_round/', 'POST', sanitizedParams);

        async function processServerResponse() {
            const serverUrl = 'https://api.server.round/v1/updateRound';
          
            try {
              const result = await callRemoteServer(serverUrl);
          
              if (result.status === 'finshed') {
                console.log('Round finished!');
                i = i + 1;
                clearInterval(intervalId);
              } else {
                console.error('Server operation failed:', result.status);
              }
            } catch (error) {
              console.error('Error calling remote server:', error);
            }
          }
          const intervalId = setInterval(processServerResponse, 30000); 
    }
};