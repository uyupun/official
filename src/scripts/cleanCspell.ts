import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { minimatch } from 'minimatch';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const getFiles = (dirPath: string, ignorePaths: string[]): string[] => {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  let files: string[] = [];

  for (const entry of entries) {
    const newDirPath = path.join(dirPath, entry.name);

    const isIgnored = ignorePaths.some((pattern) => minimatch(newDirPath, pattern, { dot: true }));
    if (isIgnored) {
      continue;
    }

    if (entry.isDirectory()) {
      files = files.concat(getFiles(newDirPath, ignorePaths));
    } else {
      files.push(newDirPath);
    }
  }

  return files;
};

const containsWords = (files: string[], word: string): boolean => {
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    const isUsed = content.includes(word);
    if (isUsed) {
      return true;
    }
  }
  return false;
};

const dirPath = path.join(dirname, '../..');

const cspellPath = path.join(dirname, '../../.cspell.json');
const cspellConfig = JSON.parse(fs.readFileSync(cspellPath, 'utf-8'));

const ignorePaths = cspellConfig.ignorePaths;
const fullIgnorePaths = ignorePaths.map((ignorePath: string) => path.join(dirPath, ignorePath));

const files = getFiles(dirPath, fullIgnorePaths);

const words = cspellConfig.overrides[0].words;
const newWords = [];
for (const word of words) {
  const isUsed = containsWords(files, word);
  if (isUsed) {
    newWords.push(word);
  }
}
cspellConfig.overrides[0].words = newWords;
const updatedJson = JSON.stringify(cspellConfig, null, 2) + '\n';
fs.writeFileSync(cspellPath, updatedJson);
