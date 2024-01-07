import { FastifyInstance } from "fastify/types/instance";
import * as controllers from '../controllers/message.controllers'
import { messageCreateSchema} from "../schemas/message.schema";

async function messageRouter(fastify: FastifyInstance) {

    fastify.route({
        method: 'POST',
        url: '/sent_message',
        schema: messageCreateSchema,
        handler: controllers.sent_message
    }) 

    fastify.route({
        method: 'GET',
        url: '/message/:id',
        handler: controllers.get_message_byuser
    })

}

export default messageRouter