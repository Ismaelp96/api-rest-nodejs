import fastify from 'fastify';
import { knexConfig } from './database';

const app = fastify();

app.get('/hello', async () => {
	const transactions = await knexConfig('transactions')
		.where('amount', 1000)
		.select('*');
	return transactions;
});

app.listen({ port: 3333 }).then(() => {
	console.log('HTTP Server Running');
});
