import { FastifyReply, FastifyRequest } from "fastify";
import type * as s from 'zapatos/schema'
import * as db from 'zapatos/db'
import {pool} from '../db/pgPool'


export const newRound = async (request: FastifyRequest, reply: FastifyReply) => {

  let param: any = request.params;
  const match_id = param['match_id'];  
  let obj: any = request.body;
    const {
        p1,
        p2, 
        monstre_p1, 
        monstre_p2
      } = obj;
    let status = "en cours";
    let date = new Date();
    let ajd = (date.getMonth()+1)+"/"+ date.getDate()+"/"+date.getFullYear();
    const roundsCount= await db.sql`SELECT COUNT(*) FROM ${"rounds"} where ${"match_id"} = ${db.param(match_id)}`.run(pool);
    let round_nb : number = roundsCount[0].count;
    return db.sql<s.rounds.SQL, s.rounds.Selectable[]>`INSERT INTO ${"rounds"} VALUES (${db.param(match_id)}, ${db.param(round_nb)}, ${db.param(status)}, ${db.param(p1)},${db.param(p2)}, ${db.param(monstre_p1)}, ${db.param(monstre_p2)}, ${db.param(ajd)})`
    .run(pool)
} 

export const updateRound = async (request: FastifyRequest, reply: FastifyReply) => {

  let param: any = request.params;
  const match_id = param['match_id'];
  const round_nb = param['round_nb']; 
  let status = "fini";
  let date = new Date();
  let ajd = (date.getMonth()+1)+"/"+ date.getDate()+"/"+date.getFullYear();
  const monstre_p1= await db.sql`SELECT monstre_p1 FROM ${"rounds"} where ${"match_id"} = ${db.param(match_id)} AND ${"round_nb"} = ${db.param(round_nb)}`.run(pool);
  const monstre_p2= await db.sql`SELECT monstre_p2 FROM ${"rounds"} where ${"match_id"} = ${db.param(match_id)} AND ${"round_nb"} = ${db.param(round_nb)}`.run(pool);
  const p1= await db.sql`SELECT p1 FROM ${"rounds"} where ${"match_id"} = ${db.param(match_id)} AND ${"round_nb"} = ${db.param(round_nb)}`.run(pool);
  const p2= await db.sql`SELECT p2 FROM ${"rounds"} where ${"match_id"} = ${db.param(match_id)} AND ${"round_nb"} = ${db.param(round_nb)}`.run(pool);
  const puissance_p1 =  Math.floor(Math.random() * 100); 
  const puissance_p2 =  Math.floor(Math.random() * 100); //récupérer puissance monstres grâce au endpoint adéquat de monstre
  let winner;
  let winnerId;
  if (puissance_p1 > puissance_p2){
    winner = p1;
    winnerId = winner[0].p1;
  } else if (puissance_p2 > puissance_p1){
    winner = p2;
    winnerId = winner[0].p2;
  } else {
    let nb = Math.floor(Math.random() * 1)+1;
    if(nb==1){
      winner = p1;
      winnerId = winner[0].p1;
    }
    else {
      winner = p2;
      winnerId = winner[0].p2;
    }
  }
  console.log(winnerId);
  let round = db.sql<s.rounds.SQL, s.rounds.Selectable[]>`UPDATE ${"rounds"} SET status = ${db.param(status)}, ended_at = ${db.param(ajd)}, winner = ${db.param(winnerId)} where ${"match_id"} = ${db.param(match_id)} AND ${"round_nb"} = ${db.param(round_nb)}`.run(pool);
  return (reply.send(await round))
} 

