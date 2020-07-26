module.exports = {
  siteMetadata: {
    title: `Axiom Construction Company`,
    description: `Professional builders operating in New England`,
    author: `@axiomconstructionco`,
    siteUrl: `https://www.axiomconstructionco.com/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-smartypants`],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000009`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/A.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
