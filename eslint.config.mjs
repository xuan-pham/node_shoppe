import pluginJs from '@eslint/js';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: globals.browser,
    },
    ignores: ['node_modules/**', 'build/**'],
  },
  {
    ...pluginJs.configs.recommended,
  },
];
