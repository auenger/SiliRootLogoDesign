import {build} from 'esbuild';
import {readFile,writeFile} from 'node:fs/promises';

await build({
  entryPoints:['src/lab/LogoAnimation.tsx'],
  outfile:'public/logo-animation.js',
  bundle:true,
  format:'iife',
  platform:'browser',
  target:['es2022'],
  jsx:'automatic',
  minify:true,
  legalComments:'eof',
  define:{'process.env.NODE_ENV':'"production"'},
});
await writeFile('public/logo-animation.js',(await readFile('public/logo-animation.js','utf8')).replace(/[ \t]+$/gm,''));
console.log('Built public/logo-animation.js');
await build({
  entryPoints:['src/lib/logo-geometry.js'],
  outfile:'public/logo-geometry.js',
  bundle:true,
  format:'esm',
  platform:'browser',
  target:['es2022'],
  minify:true,
});
await writeFile('public/logo-geometry.js',(await readFile('public/logo-geometry.js','utf8')).replace(/[ \t]+$/gm,''));
console.log('Built public/logo-geometry.js');
