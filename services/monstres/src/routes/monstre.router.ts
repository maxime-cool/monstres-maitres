import { FastifyInstance } from "fastify/types/instance";
import * as controllers from '../controllers/monstre.controllers'
import { monstreCreateSchema} from "../schemas/monstre.schema";

async function monstreRouter(fastify: FastifyInstance) {

    fastify.route({
        method: 'POST',
        url: '/monstre',
        schema: monstreCreateSchema,
        handler: controllers.create_monstre
    }) 

    fastify.route({
        method: 'GET',
        url: '/monstre',
        handler: controllers.list_monstres
    })

    fastify.route({
        method: 'GET',
        url: '/team/:id',
        handler: controllers.get_monstres_spare
    })

    fastify.route({
        method: 'GET',
        url: '/monstre/:id',
        handler: controllers.get_monstres_byuser
    })

}

export default monstreRouter