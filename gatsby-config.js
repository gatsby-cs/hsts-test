/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-gatsby-cloud',

        options: {
          allPageHeaders: [
            "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
          ],
        }
    }
  ],
}
