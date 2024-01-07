import { FastifyReply, FastifyRequest } from "fastify";
import { IMonstre } from "interfaces";
import type * as s from 'zapatos/schema'
import * as db from 'zapatos/db'
import {pool} from '../db/pgPool'

export var list_monstres = 
  async (request: FastifyRequest, reply: FastifyReply) => {
    let result = db.sql<s.monstres.SQL, s.monstres.Selectable[]>`SELECT * FROM ${"monstres"}`
    .run(pool)
    return reply.send(await result)
}

export const get_monstres_byuser = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    const id: number = parseInt(request.params.id, 10);
    if (isNaN(id)) {
        return reply.status(400).send({ error: 'Invalid user ID.' });
      }
    let result = db.sql<s.monstres.SQL, s.monstres.Selectable[]>`SELECT * FROM ${"monstres"} WHERE master_id=${db.param(id)}`
    .run(pool)
    return reply.send(await result)
}

export const create_monstre = async (request: FastifyRequest, reply: FastifyReply) => {
    let obj: any = request.body;
    const {
        dex_ref,
        name,
        description,
        power,
        master_id,
        team_id
      } = obj;
    const monstreCount= await db.sql`SELECT COUNT(*) FROM ${"monstres"}`.run(pool);
    let id : number = monstreCount[0].count;
    let total_matches = 0;
    let won_matches = 0;
    let in_match = false;
    return db.sql<s.monstres.SQL, s.monstres.Selectable[]>`INSERT INTO ${"monstres"} VALUES (${db.param(id)}, ${db.param(dex_ref)}, ${db.param(name)}, ${db.param(description)},${db.param(power)}, ${db.param(total_matches)}, ${db.param(won_matches)}, ${db.param(master_id)}, ${db.param(team_id)}, ${db.param(in_match)})`
    .run(pool)
}

export const get_monstres_spare = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    const team_id: number = parseInt(request.params.id, 10);
    if (isNaN(team_id)) {
        return reply.status(400).send({ error: 'Invalid user ID.' });
      }
    const result = db.sql<s.monstres.SQL, s.monstres.Selectable[]>`
    SELECT * FROM ${"monstres"} WHERE team_id = ${db.param(team_id)} AND in_match = false
    `.run(pool);
    return result
}

