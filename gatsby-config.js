module.exports = {
  siteMetadata: {
    title: 'notes.zander.wtf',
    description: 'notes.zander.wtf',
    keywords: [],
    author: 'Zander'
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        gitRepoContentPath:
          'https://github.com/mrmartineau/notes.zander.wtf/tree/master/notes/'
      }
    }
  ]
}
