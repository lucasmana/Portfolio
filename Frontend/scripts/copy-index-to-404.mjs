import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const index = resolve(process.cwd(), 'dist', 'index.html');
const fallback = resolve(process.cwd(), 'dist', '404.html');

if (!existsSync(index)) {
  console.warn('copy-index-to-404: dist/index.html não encontrado (rode vite build antes).');
  process.exit(0);
}

copyFileSync(index, fallback);
console.log('SPA: dist/404.html criado (GitHub Pages / refresh em rotas).');
