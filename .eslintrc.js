module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended'],
	overrides: [
		{
			files: ['**/*.js'],
			rules: {
				'sort-keys-fix/sort-keys-fix': 'warn',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['prettier', 'sort-keys-fix'],
	rules: {
		'array-bracket-newline': 'off',
		'array-bracket-spacing': 'off',
		'block-spacing': 'error',
		'comma-dangle': [
			'error',
			{
				arrays: 'only-multiline',
				exports: 'never',
				functions: 'never',
				imports: 'never',
				objects: 'always',
			},
		],
		'comma-spacing': [
			'error',
			{
				after: true,
				before: false,
			},
		],
		'comma-style': ['error', 'last'],
		'curly': 'error',
		'eol-last': ['error', 'always'],
		'function-call-argument-newline': ['error', 'consistent'],
		'function-paren-newline': ['error', 'multiline-arguments'],
		'id-denylist': ['error', 'data', 'callback', 'cb', 'func'],
		'id-match': [
			'error',
			'^[_A-Za-z]+(([A-Z][a-z]+)|([0-9]+))*$',
			{
				ignoreDestructuring: true,
			},
		],
		'indent': ['error', 'tab'],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
			},
		],
		'max-len': [
			'error',
			{
				code: 120,
			},
		],
		'new-cap': 'off',
		'no-multi-spaces': 'error',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxBOF: 1,
				maxEOF: 0,
			},
		],
		'object-curly-newline': [
			'error',
			{
				ExportDeclaration: {
					minProperties: 3,
					multiline: true,
				},
				ImportDeclaration: 'never',
				ObjectExpression: 'always',
				ObjectPattern: {
					multiline: true,
				},
			},
		],
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': 'error',
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				next: 'return',
				prev: '*',
			},
			{
				blankLine: 'always',
				next: 'break',
				prev: '*',
			},
		],
		'quote-props': ['error', 'consistent'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
	},
};
