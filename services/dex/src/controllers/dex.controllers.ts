import { FastifyReply, FastifyRequest } from "fastify";
import type * as s from 'zapatos/schema'
import * as db from 'zapatos/db'
import pool from '../db/pgPool'

export const addMonster = async (request: FastifyRequest, reply: FastifyReply) => {
    let obj: any = request.body;
    const {
        description,
        base_price, 
        base_power
      } = obj
    const monstreCount= await db.sql`SELECT COUNT(*) FROM ${"monstres"}`.run(pool);
    let dex_ref : number = monstreCount[0].count;
    return db.sql<s.monstres.SQL, s.monstres.Selectable[]>`INSERT INTO ${"monstres"} VALUES (${db.param(dex_ref)}, ${db.param(description)}, ${db.param(base_power)}, ${db.param(base_price)})`
    .run(pool)
}


export const getMonsterByRef = async (request: FastifyRequest, reply: FastifyReply) => {

    let obj: any = request.params;
    const ref = obj['dex_ref'];
    let result = db.sql<s.monstres.SQL, s.monstres.Selectable[]>`SELECT * FROM ${"monstres"} WHERE ${"dex_ref"}=${db.param(ref)}`
    .run(pool)
    return reply.send(await result)
}
