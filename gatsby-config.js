const path = require(`path`)
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
)

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Codewave-gatsby-strapi",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://strapi-be-cw.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [
          {
            name: `industrie`,
            endpoint: `api/industries?populate=*`,
          },
          {
            name: `service`,
            endpoint: `api/services?populate=*`,
          },
        ],
        singleTypes: [
          {
            name: `industrySingle`,
            endpoint: `api/industry-single?populate=*`,
          },
          {
            name: `serviceSingle`,
            endpoint: `api/service-single?populate=*`,
          },
          {
            name: `shared`,
            endpoint: `api/shared?populate=*`,
          },
          {
            name: `leadership`,
            endpoint: `api/leadership?populate=*`,
          },
          {
            name: `growing-leader`,
            endpoint: `api/growing-leader?populate=*`,
          },
          {
            name: `about`,
            endpoint: `api/about?populate=*`,
          },
          {
            name: `contact`,
            endpoint: `api/contact?populate=*`,
          },
          {
            name: `career`,
            endpoint: `api/career?populate=*`,
          },
          {
            name: `navbar`,
            endpoint: `api/navbar?populate=*`,
          },
          {
            name: `cookiePolicy`,
            endpoint: `api/cookie-policy?populate=*`,
          },
          {
            name: `privacyPolicy`,
            endpoint: `api/privacy-policy?populate=*`,
          },
          {
            name: `termsAndCondition`,
            endpoint: `api/terms-and-condition?populate=*`,
          },
          {
            name: `survivalManual`,
            endpoint: `api/survival-manual?populate=*`,
          },
          {
            name: `customerJourney`,
            endpoint: `api/customer-journey?populate=*`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
