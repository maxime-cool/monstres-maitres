import { FastifyInstance } from "fastify/types/instance";
import * as controllers from '../controllers/matchmaking.controllers'
import { matchmakingCreateSchema} from "../schemas/matchmaking.schema";

async function matchmakingRouter(fastify: FastifyInstance) {

    fastify.route({
        method: 'POST',
        url: '/make_match',
        schema: matchmakingCreateSchema,
        handler: controllers.create_matchmaking
    }) 

    fastify.route({
        method: 'GET',
        url: '/list',
        handler: controllers.listMatchmakings
    })

    fastify.route({
        method: 'PUT',
        url: '/join',
        handler: controllers.join_match
    })

    fastify.route({
        method: 'GET',
        url: '/search',
        handler: controllers.listopenmatches
    })
}

export default matchmakingRouter