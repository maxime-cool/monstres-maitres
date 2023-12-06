import { FastifyInstance } from "fastify/types/instance";
import * as controllers from '../controllers'

async function userRouter(fastify: FastifyInstance) {

    /*fastify.route({
        method: 'GET',
        url: '/',
        handler: controllers.listUsers
    })

    fastify.route({
        method: 'GET',  
        url: '/:userId',
        handler: controllers.getUser
    })

    fastify.route({
        method: 'POST',
        url: '/',
        handler: controllers.addUser
    })  

     fastify.route({
        method: 'PUT',
        url: '/:userId',
        handler: controllers.updateUser
    })  */
}

export default userRouter