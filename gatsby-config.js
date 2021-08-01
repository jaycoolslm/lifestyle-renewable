module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "LifestyleRenewable",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "lifestylerenewabe.com",
        accessToken: "",
      },
    },
    "gatsby-plugin-gatsby-cloud",
  ],
};
