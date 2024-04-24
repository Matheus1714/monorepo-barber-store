import fastify from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod'
import { getHello } from './routes/get-hello';

const port = Number(process.env.PORT) || 3333;

const app = fastify();
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(getHello);

app.listen({ port }).then(() => {
    console.log(`HTTP server runnning on http://localhost:${port}`);
});