module.exports = {

  siteMetadata: {
    title: "Bab el Oued",
    description: "Une agence de voyage pour découvrir ou redécouvrir le bled sous son plus beau jour. Tous ensemble, disons oui au bled !",
    author: "@cheb-falzär",
  }
  ,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
