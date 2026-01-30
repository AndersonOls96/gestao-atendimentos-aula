import Fastify from 'fastify'
import { swaggerPlugin } from './plugins/swagger'


export const app = Fastify({ logger: true })

swaggerPlugin(app)

app.get('/health', {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'string' }
        }
      }
    }
  }
}, async () => {
  return { status: 'ok' }
})
