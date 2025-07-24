import fastify from 'fastify';
import { knexConfig } from './database';

const app = fastify();

app.get('/hello', async () => {
	const tables = await knexConfig('sqlite_schema').select('*');

	return tables;
});

app.listen({ port: 3333 }).then(() => {
	console.log('HTTP Server Running');
});
