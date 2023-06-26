import path from 'path';

const buildEslintCommand = (filenames) => {
  return `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;
};

export default {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.{js,jsx,ts,tsx,json,html,css,yml,yaml}': 'yarn fix:prettier',
  '*.*': 'yarn lint:ls',
};
