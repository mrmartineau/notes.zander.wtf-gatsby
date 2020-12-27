module.exports = {
  siteMetadata: {
    title: 'notes.zander.wtf',
    description: `Notes on code. My  second brain, by Zander Martineau.`,
    keywords: [],
    author: 'Zander',
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
        showDescriptionInSidebar: true,
        showDate: true,
        openSearch: {
          siteShortName: `Zander's Code Notes`,
          siteUrl: 'https://notes.zander.wtf',
          siteTags: 'front-end',
          siteContact: 'https://twitter.com/MrMartineau',
          siteDescription:
            'Notes on code. My  second brain, by Zander Martineau.',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zander's Code Notes`,
        short_name: `CodeNotes`,
        description: `Notes on code. My second brain.`,
        start_url: `/`,
        background_color: `hsl(210, 38%, 95%)`,
        theme_color: `hsl(345, 100%, 69%)`,
        display: `standalone`,
        icon: `static/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`, `/tag/*`],
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `notes.zander.wtf`,
        customDomain: `stats.zander.wtf`,
      },
    },
  ],
}
