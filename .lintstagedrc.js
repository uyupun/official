const path = require('path');

const buildEslintCommand = (filenames) => {
  const baseCommand =
    'next lint --ignore-path .eslintignore --cache --cache-strategy content --file';
  const lintTargets = filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ');
  return `${baseCommand} ${lintTargets}`;
};

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.{js,jsx,ts,tsx,json,html,css,yml,yaml}': 'yarn lint:prettier',
  '*.*': 'yarn lint:ls',
};
