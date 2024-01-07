import { FastifyInstance } from "fastify/types/instance";
import * as controllers from '../controllers'

async function marketRouter(fastify: FastifyInstance) {

    fastify.route({
        method: 'GET',
        url: '/buy_monster',
        handler: controllers.buyMonster
    }) 
}

export default marketRouter