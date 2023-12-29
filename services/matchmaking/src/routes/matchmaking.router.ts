import { FastifyInstance } from "fastify/types/instance";
import * as controllers from '../controllers/matchmaking.controllers'
import { matchCreateSchema} from "../schemas/matchmaking.schema";

async function matchmakingRouter(fastify: FastifyInstance) {

    fastify.route({
        method: 'POST',
        url: '/create_match',
        schema: matchCreateSchema,
        handler: controllers.create_match
    }) 

    fastify.route({
        method: 'GET',
        url: '/matches',
        handler: controllers.listMatches
    })

    fastify.route({
        method: 'GET',  
        url: '/match/:match_id',
        handler: controllers.get_details_match
    }) 

    fastify.route({
        method: 'POST',
        url: '/join/',
        handler: controllers.join_match
    })

    fastify.route({
        method: 'PUT',
        url: '/play',
        handler: controllers.play_match
    })

    fastify.route({
        method: 'DELETE',
        url: '/delete',
        handler: controllers.delete_match
    })
}

export default matchmakingRouter