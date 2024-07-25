import { marked } from '../lib/marked.esm.js';

const text = '![1](https://example.com/image.png)'

const html = marked(text);

console.log(html);
