import { FastifyInstance } from "fastify/types/instance";
import * as controllers from '../controllers'
import { roundsCreateSchema} from "../schemas/rounds.schema";

async function roundsRouter(fastify: FastifyInstance) {

    fastify.route({
        method: 'POST',
        url: '/new_round/:match_id',
        schema: roundsCreateSchema,
        handler: controllers.newRound
    }) 

    fastify.route({
        method: 'PUT',
        url: '/update/:match_id/:round_nb',
        handler: controllers.updateRound
    }) 
}

export default roundsRouter