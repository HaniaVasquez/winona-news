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
