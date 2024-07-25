import { marked } from '../lib/marked.esm.js';

const text = '![type:video](https://example.com/video.mp4)';

const html = marked(text);

console.log(html);
