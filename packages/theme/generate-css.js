#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { themeLight } from './src/themeLight.js';
import { themeDark } from './src/themeDark.js';

/**
 * Поскольку в ES-модулях нет __dirname, получаем его так:
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Рекурсивно строит строки CSS custom properties
 */
function buildLines(obj, prefix = []) {
  return Object.entries(obj).flatMap(([key, val]) => {
    const p = [...prefix, key];
    if (val && typeof val === 'object') {
      return buildLines(val, p);
    }
    return [`  --${p.join('-')}: ${val};`];
  });
}

// Генерация CSS для светлой темы
const lightCss = [`[data-theme="light"] {`, ...buildLines(themeLight), `}`].join('\n');

// Генерация CSS для тёмной темы
const darkCss = [`[data-theme="dark"] {`, ...buildLines(themeDark), `}`].join('\n');

// Итоговый контент
const out = `${lightCss}\n\n${darkCss}\n`;

// Используем вычисленный __dirname
const outPath = path.resolve(__dirname, 'out/theme.css');

// Убедимся, что директория существует
fs.mkdirSync(path.dirname(outPath), { recursive: true });

// Запись файла
fs.writeFileSync(outPath, out);
console.log('✅ theme.css generated at', outPath);
