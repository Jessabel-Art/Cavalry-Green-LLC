import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distPath = path.join(root, 'dist');
const outPath = path.join(root, 'out');

fs.rmSync(distPath, { recursive: true, force: true });
fs.rmSync(outPath, { recursive: true, force: true });

execSync('npx next build', { stdio: 'inherit', cwd: root, shell: true });

if (!fs.existsSync(outPath)) {
  throw new Error('Next static export did not generate an out/ folder.');
}

fs.renameSync(outPath, distPath);

const routes = ['index.html', 'services/index.html', 'quote/index.html'];
for (const relative of routes) {
  const filePath = path.join(distPath, relative);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing generated route: ${relative}`);
  }
}

console.log('Static export finalized at dist/.');
