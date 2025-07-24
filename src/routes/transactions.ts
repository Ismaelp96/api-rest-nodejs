import { FastifyInstance } from 'fastify';
import { knexConfig } from '../database';

export async function transactionsRoutes(app: FastifyInstance) {
	app.get('/hello', async () => {
		const transactions = await knexConfig('transactions')
			.where('amount', 1000)
			.select('*');
		return transactions;
	});
}
