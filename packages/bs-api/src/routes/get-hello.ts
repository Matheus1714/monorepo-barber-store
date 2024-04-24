import { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod';
import { FastifyInstance } from 'fastify';

export async function getHello(app: FastifyInstance){
    app.withTypeProvider<ZodTypeProvider>().get('/', {
        schema: {
            response: {
                200: z.object({
                    message: z.string(),
                })
            }
        },
    }, async (request, reply) => {
        return reply.status(200).send({
            message: 'hello'
        });
    });
}