import generate from './generate';

describe('generate.ts', () => {
  it('generates the correct changelog', async () => {
    const changelog = await generate({
      from: '3a145b38feb6c24e9d54b507aa121676b1f184ea',
      to: '34ead995676dcc41c5cf8d9400af67c432a58333',
      configFile: '',
      repoUrl: 'http://git.n.local/NSoft/gitea-conventional-changelog-action',
    });

    expect(changelog).toMatchSnapshot();
  });
});
