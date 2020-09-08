/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyABbkBieHYYijTr1ZUMhgKdmS1Tus3LR0I",
          authDomain: "quassum-manus-homepage.firebaseapp.com",
          databaseURL: "https://quassum-manus-homepage.firebaseio.com",
          projectId: "quassum-manus-homepage",
          storageBucket: "quassum-manus-homepage.appspot.com",
          messagingSenderId: "587649284107",
          appId: "1:587649284107:web:9e6fe0e18d5a79d0532f0e",
          measurementId: "G-PR0F90LEJC",
        },
      },
    },
  ],
}
