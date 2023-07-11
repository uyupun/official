const path = require('path');

const buildEslintCommand = (filenames) => {
  const baseCommand = 'next lint --ignore-path .eslintignore --cache --cache-strategy content';
  const lintTargets = filenames.map((f) => `--file ${path.relative(process.cwd(), f)}`).join(' ');
  return `${baseCommand} ${lintTargets}`;
};

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.{js,jsx,ts,tsx,json,html,css,yml,yaml}': 'yarn lint:prettier',
  '*.*': 'yarn lint:ls',
};
