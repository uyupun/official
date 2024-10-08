import { execSync } from 'child_process';

import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
const port = typeof argv.p === 'number' ? argv.p : 3000;
const url = `http://localhost:${port}`;

execSync(`lighthouse ${url} --chrome-flags="--headless" --output html`, { stdio: 'inherit' });
