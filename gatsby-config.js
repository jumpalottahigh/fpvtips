let config

try {
  config = require('./.config')
} catch (e) {
  config = {
    openWeatherMap: {
      key: process.env.GATSBY_OPEN_WEATHER_MAP_KEY,
    },
    firebase: {
      key: process.env.GATSBY_FIREBASE_KEY,
    },
  }
} finally {
  if (!config.openWeatherMap.key) {
    throw new Error('OpenWeatherMap API key needs to be provided.')
  }

  if (!config.firebase.key) {
    throw new Error('Firebase API key needs to be provided.')
  }

  process.env.GATSBY_OPEN_WEATHER_MAP_KEY = config.openWeatherMap.key
  process.env.GATSBY_FIREBASE_KEY = config.firebase.key
}

module.exports = {
  siteMetadata: {
    title: 'Fpvtips',
    author: 'Georgi Yanev',
    description: 'Let\'s bring the FPV community closer together and help new people get into the hobby!',
    siteUrl: 'https://fpvtips.com',
  },
  plugins: [
    {
      resolve: `@wapps/gatsby-plugin-material-ui`,
      options: {
        theme: {
          palette: {
            primary: {
              main: '#0375d8',
            },
            secondary: {
              main: '#f5f5f5',
            },
          },
        },
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'dictionary',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-43588334-10`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fpvtips.com`,
        short_name: `FPVtips`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1960a0`,
        display: `minimal-ui`,
        icon: `src/assets/fpvtips-logo-512.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
