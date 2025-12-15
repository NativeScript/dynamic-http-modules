import { defineConfig } from 'vite';
import { typescriptConfig } from '@nativescript/vite';;

export default defineConfig(({ mode }) => typescriptConfig({ mode }));
