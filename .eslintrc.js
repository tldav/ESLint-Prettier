module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "airbnb", "prettier"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "prettier"],
	rules: {
		quotes: ["error", "double"],
		"jsx-quotes": [2, "prefer-double"],
		indent: ["error", "tab"],
		"prettier/prettier": [2, { useTabs: true, endOfLine: "auto" }],
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
		"func-style": [2, "expression"],
		"func-names": [2, "as-needed"],
		"react/function-component-definition": [
			2,
			{
				namedComponents: "arrow-function",
				unnamedComponents: "arrow-function",
			},
		],
		"arrow-body-style": ["off", "as-needed"],
	},
};
