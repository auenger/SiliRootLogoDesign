import {readFile,writeFile} from 'node:fs/promises';

const source=await readFile('assets/logo-horizontal.svg','utf8');

const themedLogo=(background,foreground)=>source
  .replace(/ fill="#202020">/,`><rect width="1420" height="430" fill="${background}"/><g fill="${foreground}">`)
  .replace('</svg>','</g></svg>');

await Promise.all([
  writeFile('assets/logo-readme-light.svg',themedLogo('#f2f4f4','#202020')),
  writeFile('assets/logo-readme-dark.svg',themedLogo('#202328','#f4f4f4')),
]);

console.log('Built light and dark README logo assets');
