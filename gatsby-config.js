module.exports = {
  siteMetadata: {
    title: `My personal Blog`,
    description: `Here I share my personal experiences along with cool tips and tricks!`,
    author: `@bhatshaqran`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Untitled-1.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-antd`,
    `gatsby-plugin-sass`,
    // {
    //   resolve: "gatsby-source-formspree",
    //   options: {
    //     form: "xzbypyek",
    //     key: "YOUR_API_KEY",
    //   },
    // },
  ],
}
