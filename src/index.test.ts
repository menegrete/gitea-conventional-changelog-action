import process from 'process';
import cp from 'child_process';
import path from 'path';
import { promisify } from 'util';

const exec = promisify(cp.exec);

describe('index.ts', () => {
  test('The action is executed without an error', async () => {
    process.env['INPUT_FROM'] = '';
    process.env['INPUT_TO'] = 'HEAD';
    process.env['INPUT_REPOURL'] =
      'http://git.n.local/NSoft/gitea-conventional-changelog-action';

    const ip = path.join(__dirname, 'index.ts');
    const { stdout, stderr } = await exec(`ts-node ${ip}`, {
      env: process.env,
    });

    expect(stderr).toBeFalsy();
    expect(stdout).toBeTruthy();
  });
});
