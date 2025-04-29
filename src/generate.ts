import path from 'path';
import { getConfig } from './config';
import { getCommits, getIssuesPath } from './git';
import { Changelog, generateChangelog } from './changelog';
import { info } from '@actions/core';

type Generate = (params: {
  from: string;
  to: string;
  configFile: string;
  repoUrl: string;
}) => Promise<Changelog>;

const generate: Generate = async ({ from, to, configFile, repoUrl }) => {
  const config = getConfig(
    configFile || path.join(__dirname, 'defaultConfig.json')
  );

  info(
    'Generating changelog...' + JSON.stringify({ from, to, repoUrl, ...config })
  );
  const issuesUrl = config.issuesUrl || (await getIssuesPath({ repoUrl }));
  const commits = await getCommits({ from, to });
  return generateChangelog({
    ...config,
    commits,
    issuesUrl,
  });
};

export default generate;
