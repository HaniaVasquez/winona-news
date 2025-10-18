/*
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'
import pluginNuxt from 'eslint-plugin-nuxt'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  {
    ignores: ['.nuxt', '.output', 'dist', 'node_modules', '.nitro'],
  },

  js.configs.recommended,
  ...(pluginVue.configs['flat/recommended'] || []),
  pluginNuxt.configs['flat/recommended'] || {},
  prettier,

  {
    files: ['**!/!*.{ts,js,vue}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      vue: pluginVue,
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': 'warn',
      'prettier/prettier': 'error',
      '@stylistic/indent': 'off',
      '@stylistic/comma-dangle': 'off',
      '@stylistic/arrow-parens': 'off',
      '@stylistic/eol-last': 'off',
      '@stylistic/operator-linebreak': 'off',
    },
  },
]
*/

import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginNuxt from 'eslint-plugin-nuxt'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierPlugin from 'eslint-plugin-prettier'
import vueParser from 'vue-eslint-parser'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{ts,js,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: {
        defineNuxtConfig: 'readonly',
        defineAppConfig: 'readonly',
        defineEventHandler: 'readonly',
        useRuntimeConfig: 'readonly',
        useAsyncData: 'readonly',
        $fetch: 'readonly',
        process: 'readonly',
        useHead: 'readonly',
        useSeoMeta: 'readonly',
        definePageMeta: 'readonly',
        defineComponent: 'readonly',
        console: 'readonly',
        URL: 'readonly',
        Response: 'readonly',
        Headers: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        Blob: 'readonly',
        atob: 'readonly',
        DecompressionStream: 'readonly',
        IntersectionObserverInit: 'readonly',
        HTMLElementEventMap: 'readonly',
      },
    },
    ignores: [
      ".nuxt",
      ".output",
      "dist",
      ".nitro",
      ".vercel",
      "node_modules",
    ],
    plugins: {
      vue: pluginVue,
      nuxt: pluginNuxt,
      prettier: prettierPlugin,
      '@typescript-eslint': ts,
    },
    rules: {
      ...(pluginVue.configs['vue3-recommended']?.rules || {}),
      ...(pluginNuxt.configs?.recommended?.rules || {}),
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'no-unused-vars': 'off',
      'prettier/prettier': ['error'],
    },
  },
]
