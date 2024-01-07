import { FastifyInstance } from "fastify/types/instance";
import * as controllers from '../controllers'
import { userCreateSchema} from "../schemas/user.schema";

async function userRouter(fastify: FastifyInstance) {

    fastify.route({
        method: 'POST',
        url: '/create_account',
        schema: userCreateSchema,
        handler: controllers.addUser
    }) 

    fastify.route({
        method: 'GET',
        url: '/get_players',
        handler: controllers.listUsers
    })

    fastify.route({
        method: 'GET',  
        url: '/get_player/:id',
        handler: controllers.getUser
    }) 

    fastify.route({
        method: 'PUT',
        url: '/credits/:id',
        handler: controllers.updateCredits
    })   

    fastify.route({
        method: 'GET',
        url: '/credits/:id',
        handler: controllers.getCredits_byuser
    })  
}

export default userRouter