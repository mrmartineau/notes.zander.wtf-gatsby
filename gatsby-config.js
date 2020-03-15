module.exports = {
  siteMetadata: {
    title: 'notes.zander.wtf',
    description: 'Notes on code. My memory bank.',
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
          'https://github.com/mrmartineau/notes.zander.wtf/tree/master/notes/',
        showThemeInfo: true,
        showDescriptionInSidebar: true
      }
    }
  ]
}
