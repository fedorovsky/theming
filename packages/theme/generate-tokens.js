#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { themeLight } from './src/themeLight.js';

/**
 * Получаем __dirname в ES-модуле
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Рекурсивно строит объект токенов в формате var(--prefix-key)
 */
function buildTokens(obj, prefix = []) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, val]) => {
      const newPrefix = [...prefix, key];
      if (val !== null && typeof val === 'object') {
        return [key, buildTokens(val, newPrefix)];
      } else {
        const varName = `--${newPrefix.join('-')}`;
        return [key, `var(${varName})`];
      }
    }),
  );
}

// Генерируем токены
const tokens = buildTokens(themeLight);

// Формируем содержимое файла
const tsContent = `
export const tokens = ${JSON.stringify(tokens, null, 2)} as const;

export type Tokens = typeof tokens;
`;

// Путь вывода
const outPath = path.resolve(__dirname, 'out/tokens.ts');

// Убедимся, что директория существует
fs.mkdirSync(path.dirname(outPath), { recursive: true });

// Пишем файл
fs.writeFileSync(outPath, tsContent);

console.log(`✅ tokens.ts ${outPath}`);
