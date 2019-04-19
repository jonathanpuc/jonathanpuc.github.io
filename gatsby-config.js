const path = require("path")
module.exports = {
  siteMetadata: {
    title: `Jonathan Puc`,
    description: `Web Developer based in Melbourne`,
    author: `Jonathan Puc`,
  },
  plugins: [
    `gatsby-plugin-favicon`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@components": path.join(__dirname, "src/components"),
        "@assets": path.join(__dirname, "src/assets"),
        "@src": path.join(__dirname, "src"),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jonathan Puc portfolio`,
        short_name: `JP portfolio`,
        start_url: `/`,
        background_color: `#FF7C32`,
        theme_color: `#FF7C32`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Source Sans Pro\:400,600,700,900,900i`,
          `Open Sans\:400,600`, // you can also specify font weights and styles
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/assets`,
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
