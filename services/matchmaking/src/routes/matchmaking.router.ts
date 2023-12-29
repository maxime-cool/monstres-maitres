import { FastifyInstance } from "fastify/types/instance";
import * as controllers from '../controllers/matchmaking.controllers'
import { matchmakingCreateSchema} from "../schemas/matchmaking.schema";

async function matchmakingRouter(fastify: FastifyInstance) {

    fastify.route({
        method: 'POST',
        url: '/research',
        schema: matchmakingCreateSchema,
        handler: controllers.create_matchmaking
    }) 

    fastify.route({
        method: 'GET',
        url: '/list',
        handler: controllers.listMatchmakings
    })
}

export default matchmakingRouter