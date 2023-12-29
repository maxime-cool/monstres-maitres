import { FastifyReply, FastifyRequest } from "fastify";
import { IMatchmaking } from "interfaces";
import type * as s from 'zapatos/schema'
import * as db from 'zapatos/db'
import {pool} from '../db/pgPool'

export var listMatchmakings = 
  async (request: FastifyRequest, reply: FastifyReply) => {
    let result = db.sql<s.matchmaking.SQL, s.matchmaking.Selectable[]>`SELECT * FROM ${"matchmaking"}`
    .run(pool)
    return reply.send(await result)
}

export const create_matchmaking = async (request: FastifyRequest, reply: FastifyReply) => {
    let obj: any = request.body;
    const {
        p1,
        open,
        opponent
      } = obj;
    if (opponent !== undefined) {
        //message
    }
    const matchmakingCount= await db.sql`SELECT COUNT(*) FROM ${"matchmaking"}`.run(pool);
    let id : number = matchmakingCount[0].count;
    let date = new Date();
    let ajd = (date.getMonth()+1)+"/"+ date.getDate()+"/"+date.getFullYear();
    return db.sql<s.matchmaking.SQL, s.matchmaking.Selectable[]>`INSERT INTO ${"matchmaking"} VALUES (${db.param(id)}, ${db.param(p1)}, ${db.param(ajd)}, ${db.param(open)})`
    .run(pool)
}