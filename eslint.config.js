// eslint.config.js
import tseslint from 'typescript-eslint';
import js from '@eslint/js';

export default tseslint.config(
	js.configs.recommended,

	{
		files: ['**/*.ts'],

		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: './tsconfig.json',
				sourceType: 'module',
			},

			globals: {
				console: 'readonly',
				process: 'readonly',
				__dirname: 'readonly',
				module: 'readonly',
				require: 'readonly',
				exports: 'readonly',
			},
		},

		rules: {
			'no-console': 'off',
			'no-unused-vars': 'warn',
		},
	},
);
