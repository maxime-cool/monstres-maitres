import fastify from 'fastify'
import dexRouter from './routes/dex.router'

import 'dotenv/config'

const port = 5006;
const host = '0.0.0.0'

const startServer = async () => {
    try {
        const server = fastify()

        const errorHandler = (error, address) => {
            server.log.error(error, address);
        }

        server.register(dexRouter, { prefix : '/api/dex'})
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