import knex from 'knex';

export const knexDb = knex({
	client: 'sqlite',
	connection: { filename: './tmp/app.db' },
});
