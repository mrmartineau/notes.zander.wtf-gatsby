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
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zander's Code Notes`,
        short_name: `CodeNotes`,
        description: `Notes on code. My memory bank.`,
        start_url: `/`,
        background_color: `hsl(210, 38%, 95%)`,
        theme_color: `hsl(345, 100%, 69%)`,
        display: `standalone`,
        icon: `static/logo.png`
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`, `/tag/*`]
      }
    }
  ]
}
