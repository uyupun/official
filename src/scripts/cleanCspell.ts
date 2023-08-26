import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { minimatch } from 'minimatch';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const getFilePaths = (dirPath: string, ignorePaths: string[]): string[] => {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  let filePaths: string[] = [];

  for (const entry of entries) {
    const newDirPath = path.join(dirPath, entry.name);

    const isIgnored = ignorePaths.some((pattern) => minimatch(newDirPath, pattern, { dot: true }));
    if (isIgnored) {
      continue;
    }

    if (entry.isDirectory()) {
      filePaths = filePaths.concat(getFilePaths(newDirPath, ignorePaths));
    } else {
      filePaths.push(newDirPath);
    }
  }

  return filePaths;
};

const getUnnecessaryWords = (filePaths: string[], words: string[]): string[] => {
  const newWords = [];
  for (const word of words) {
    const isUsed = containsWords(filePaths, word);
    if (isUsed) {
      newWords.push(word);
    } else {
      console.log(`Removed: ${word}`);
    }
  }
  return newWords;
};

const containsWords = (filePaths: string[], word: string): boolean => {
  for (const filePath of filePaths) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const isUsed = content.includes(word);
    if (isUsed) {
      return true;
    }
  }
  return false;
};

const cleanCspellWords = (path: string, config: object): void => {
  const configJson = JSON.stringify(config, null, 2) + '\n';
  fs.writeFileSync(path, configJson);
};

const dirPath = path.join(dirname, '../..');

const cspellPath = path.join(dirname, '../../.cspell.json');
const cspellConfig = JSON.parse(fs.readFileSync(cspellPath, 'utf-8'));

const ignorePaths = cspellConfig.ignorePaths;
const fullIgnorePaths = ignorePaths.map((ignorePath: string) => path.join(dirPath, ignorePath));

const filePaths = getFilePaths(dirPath, fullIgnorePaths);

const words = cspellConfig.overrides[0].words;
const newWords = getUnnecessaryWords(filePaths, words);

cspellConfig.overrides[0].words = newWords;
cleanCspellWords(cspellPath, cspellConfig);
