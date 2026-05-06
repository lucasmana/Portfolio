/** Slugs do Simple Icons (CDN) — fallback vira nome normalizado. */
const SLUGS = {
  JavaScript: 'javascript',
  HTML5: 'html5',
  CSS3: 'css3',
  Bootstrap: 'bootstrap',
  React: 'react',
  'Vue.js': 'vuedotjs',
  TypeScript: 'typescript',
  Python: 'python',
  PHP: 'php',
  'Node.js': 'nodedotjs',
  Express: 'express',
  SQL: 'mysql',
  MongoDB: 'mongodb',
  PostgreSQL: 'postgresql',
  PostegreSQL: 'postgresql',
  XAMPP: 'xampp',
  MySQL: 'mysql',
  Git: 'git',
  GitHub: 'github',
  'VS Code': 'visualstudiocode',
  npm: 'npm',
  Vite: 'vite',
  JWT: 'jsonwebtoken',
  Bcrypt: 'shield',
  Docker: 'docker',
  Firestore: 'firebase',
  PWA: 'pwa',
  n8n: 'n8n',
  Nodemon: 'nodemon',
  'Socket IO': 'socketdotio',
};

export function techIconUrl(name) {
  const slug = SLUGS[name] || name.toLowerCase().replace(/\./g, 'dot').replace(/\s+/g, '');
  return `https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${slug}.svg`;
}
