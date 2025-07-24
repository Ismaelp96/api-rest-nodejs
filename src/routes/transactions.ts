import { FastifyInstance } from 'fastify';
import z from 'zod';
import { randomUUID } from 'node:crypto';

import { knexDB } from '../database';

export async function transactionsRoutes(app: FastifyInstance) {
	app.post('/', async (request, reply) => {
		const createTransactionBodySchema = z.object({
			title: z.string(),
			amount: z.number(),
			type: z.enum(['credit', 'debit']),
		});

		const { amount, title, type } = createTransactionBodySchema.parse(
			request.body,
		);

		await knexDB('transactions').insert({
			id: randomUUID(),
			title,
			amount: type === 'credit' ? amount : amount * -1,
		});
		return reply.status(201).send();
	});
}
