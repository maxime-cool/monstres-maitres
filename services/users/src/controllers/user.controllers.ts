import { FastifyReply, FastifyRequest } from "fastify";
import { IUser } from "interfaces";
import type * as s from 'zapatos/schema'
import * as db from 'zapatos/db'
import {pool} from '../db/pgPool'

export var listUsers = 
  async (request: FastifyRequest, reply: FastifyReply) => {
    let result = db.sql<s.users.SQL, s.users.Selectable[]>`SELECT id, username, created_at, role, total_matches, won_matches, credits FROM ${"users"}`
    .run(pool)
    return reply.send(await result)
}

export const getUser = async (request: FastifyRequest, reply: FastifyReply) => {

    let obj: any = request.params;
    const userId = obj['id'];
    let result = db.sql<s.users.SQL, s.users.Selectable[]>`SELECT * FROM ${"users"} WHERE ${"id"}=${db.param(userId)}`
    .run(pool)
    return reply.send(await result)
}

export const addUser = async (request: FastifyRequest, reply: FastifyReply) => {

    let obj: any = request.body;
    const {
        username,
        email, 
        password
      } = obj;
    let date = new Date();
    let ajd = (date.getMonth()+1)+"/"+ date.getDate()+"/"+date.getFullYear();
    const userCount= await db.sql`SELECT COUNT(*) FROM ${"users"}`.run(pool);
    let id : number = userCount[0].count;
    return db.sql<s.users.SQL, s.users.Selectable[]>`INSERT INTO ${"users"} VALUES (${db.param(id)}, ${db.param(username)}, ${db.param(email)}, ${db.param(password)}, ${db.param(ajd)})`
    .run(pool)
} 

export const updateCredits = async (request: FastifyRequest, reply: FastifyReply) => {

    let obj: any = request.params;
    const userId = obj['id'];
    let obj2: any = request.body;
    let newCredits : number = obj2['credits']
    db.sql<s.users.SQL, s.users.Selectable[]>`UPDATE ${"users"} SET ${"credits"} = ${db.param(newCredits)} where ${"id"}=${db.param(userId)} `.run(pool)
    console.log(newCredits)
    let user = db.sql<s.users.SQL, s.users.Selectable[]>`SELECT * FROM ${"users"} WHERE ${"id"}=${db.param(userId)}`.run(pool)
    return (reply.send(await user))
} 

export const getCredits_byuser = async (request: FastifyRequest, reply: FastifyReply) => {

    let obj: any = request.params;
    const userId = obj['id'];
    let user = db.sql<s.users.SQL, s.users.Selectable[]>`SELECT credits FROM ${"users"} WHERE ${"id"}=${db.param(userId)}`.run(pool)
    return (reply.send(await user))
} 


