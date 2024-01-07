import fastify from 'fastify'
import matchRouter from './routes/monstre.router'

import 'dotenv/config'

const port = 5004;
const host = '0.0.0.0'

const startServer = async () => {
    try {
        const server = fastify()

        const errorHandler = (error, address) => {
            server.log.error(error, address);
        }

        server.register(matchRouter, { prefix : '/api/monstres'})
        server.listen({host, port }, errorHandler)
    } catch (e) {
        console.error(e)
    }
}

process.on('unhandledRejection', (e) => {
    console.error(e)
    process.exit(1)
})

startServer()