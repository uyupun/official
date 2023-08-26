import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { minimatch } from 'minimatch';

const cleanCspellWords = (dirPath: string): void => {
  const cspellPath = path.join(dirPath, '.cspell.json');
  const cspellConfig = JSON.parse(fs.readFileSync(cspellPath, 'utf-8'));

  const ignorePaths = cspellConfig.ignorePaths;
  const fullIgnorePaths = getFullIgnorePaths(dirPath, ignorePaths);

  const filePaths = getFilePaths(dirPath, fullIgnorePaths);

  const words = cspellConfig.overrides[0].words;
  const usedWords = getUsedWords(filePaths, words);
  cspellConfig.overrides[0].words = usedWords;

  removeCspellWords(cspellPath, cspellConfig);
};

const getFullIgnorePaths = (dirPath: string, ignorePaths: string[]): string[] => {
  const fullIgnorePaths = ignorePaths.map((ignorePath: string) => path.join(dirPath, ignorePath));
  return fullIgnorePaths;
};

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

const getUsedWords = (filePaths: string[], words: string[]): string[] => {
  const usedWords = [];
  for (const word of words) {
    const isUsed = containsWords(filePaths, word);
    if (isUsed) {
      usedWords.push(word);
    } else {
      console.log(`Removed: ${word}`);
    }
  }
  return usedWords;
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

const removeCspellWords = (configPath: string, config: object): void => {
  const configJson = JSON.stringify(config, null, 2) + '\n';
  fs.writeFileSync(configPath, configJson);
};

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const dirPath = path.join(dirname, '../..');

cleanCspellWords(dirPath);
