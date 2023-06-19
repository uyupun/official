const { execSync } = require('child_process');

const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));
const port = argv.p || 3000;
const url = `http://localhost:${port}`;

execSync(`lighthouse ${url} --chrome-flags="--headless" --output html`, { stdio: 'inherit' });
