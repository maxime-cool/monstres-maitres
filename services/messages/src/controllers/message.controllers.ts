import { FastifyReply, FastifyRequest } from "fastify";
import { IMessage } from "interfaces";
import type * as s from 'zapatos/schema'
import * as db from 'zapatos/db'
import {pool} from '../db/pgPool'

export const get_message_byuser = async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
    const id: number = parseInt(request.params.id, 10);
    if (isNaN(id)) {
        return reply.status(400).send({ error: 'Invalid user ID.' });
      }
    let result = db.sql<s.messages.SQL, s.messages.Selectable[]>`SELECT * FROM ${"messages"} WHERE to_id=${db.param(id)}`
    .run(pool)
    return reply.send(await result)
}

export const sent_message = async (request: FastifyRequest, reply: FastifyReply) => {
    let obj: any = request.body;
    const {
        from_id,
        to_id,
        content
      } = obj;
    const messageCount= await db.sql`SELECT COUNT(*) FROM ${"messages"}`.run(pool);
    let id : number = messageCount[0].count;
    let date = new Date();
    let ajd = (date.getMonth()+1)+"/"+ date.getDate()+"/"+date.getFullYear();
    return db.sql<s.messages.SQL, s.messages.Selectable[]>`INSERT INTO ${"messages"} VALUES (${db.param(id)}, ${db.param(ajd)}, ${db.param(from_id)}, ${db.param(to_id)},${db.param(content)})`
    .run(pool)
}