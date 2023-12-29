import { FastifyInstance } from "fastify/types/instance";
import * as controllers from '../controllers/match.controllers'
import { matchCreateSchema} from "../schemas/match.schema";

async function matchRouter(fastify: FastifyInstance) {

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
        url: '/match/:id',
        handler: controllers.get_details_match
    }) 

    fastify.route({
        method: 'POST',
        url: '/join',
        handler: controllers.join_match
    })

    fastify.route({
        method: 'PUT',
        url: '/play',
        handler: controllers.play_match
    })

}

export default matchRouter