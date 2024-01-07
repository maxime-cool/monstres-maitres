import { FastifyInstance } from "fastify/types/instance";
import * as controllers from '../controllers'

async function dexRouter(fastify: FastifyInstance) {

    fastify.route({
        method: 'POST',
        url: '/add_monster',
        handler: controllers.addMonster
    }) 

    fastify.route({
        method: 'GET',
        url: '/get_monster/:dex_ref',
        handler: controllers.getMonsterByRef
    }) 
}

export default dexRouter