const gitMessage = `:bookmark: v\${nextRelease.version} [skip ci]

https://github.com/momocow/webpack-userscript/releases/tag/\${nextRelease.gitTag}`

module.exports = {
  plugins: [
    'semantic-release-gitmoji',
    '@semantic-release/github',
    '@semantic-release/npm',
    [
      '@semantic-release/git', { message: gitMessage }
    ]
  ]
}
