import knex, { Knex } from 'knex';
import { env } from './env';

export const config: Knex.Config = {
	client: 'sqlite',
	connection: { filename: env.DATABASE_URL },
	migrations: {
		extension: 'ts',
		directory: './db/migrations',
	},
	useNullAsDefault: true,
};

export const knexDB = knex(config);
