#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { themeLight } from './src/themeLight';
import { themeDark } from './src/themeDark';

/**
 * В ESM-модулях нет __dirname, получаем его так:
 */
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

/**
 * Тип для вложенного объекта темы
 */
type ThemeObject = {
  [key: string]: string | ThemeObject;
};

/**
 * Рекурсивно строит массив строк CSS custom properties
 */
function buildLines(obj: ThemeObject, prefix: string[] = []): string[] {
  return Object.entries(obj).flatMap(([key, val]) => {
    const pathKeys = [...prefix, key];
    if (val !== null && typeof val === 'object') {
      // рекурсивно погружаемся в вложенный объект
      return buildLines(val as ThemeObject, pathKeys);
    }
    // составляем строку вида "--parent-child: value;"
    return [`  --${pathKeys.join('-')}: ${val};`];
  });
}

/**
 * Генерация CSS для светлой темы
 */
const lightCssLines: string[] = buildLines(themeLight);
const lightCss = [
  `[data-theme="light"] {`,
  ...lightCssLines,
  `}`
].join('\n');

/**
 * Генерация CSS для тёмной темы
 */
const darkCssLines: string[] = buildLines(themeDark);
const darkCss = [
  `[data-theme="dark"] {`,
  ...darkCssLines,
  `}`
].join('\n');

/**
 * Объединяем оба блока в итоговый CSS
 */
const outputCss: string = `${lightCss}\n\n${darkCss}\n`;

/**
 * Путь для записи файла
 */
const outPath: string = path.resolve(__dirname, 'out', 'theme.css');

/**
 * Убедимся, что директория существует (рекурсивно)
 */
fs.mkdirSync(path.dirname(outPath), { recursive: true });

/**
 * Запись итогового CSS-файла
 */
fs.writeFileSync(outPath, outputCss, { encoding: 'utf-8' });

console.log('✅ theme.css generated at', outPath);
