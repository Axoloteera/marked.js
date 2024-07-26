#!/usr/bin/env node

// Edited by @Axoloteera (https://github.com/Axoloteera)
// edited repo: https://github.com/Axoloteera/marked.js
// original repo: https://github.com/markedjs/marked

/**
 * Marked CLI
 * Copyright (c) 2011-2013, Christopher Jeffrey (MIT License)
 */

import { main } from './main.js';

/**
 * Expose / Entry Point
 */

process.title = 'marked';
main(process);
