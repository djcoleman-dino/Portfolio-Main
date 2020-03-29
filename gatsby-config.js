module.exports = {
  siteMetadata: {
    title: "Donald Coleman — Indie Maker, Full-Stack Developer",
    description:
      "Donald Coleman is an indie maker, serial entrepreneur, full-stack developer, and Co-Founder of Entry Level",
    baseUrl: "https://docoleman.com",
    image: "/public/logo.png",
    owner: "Donald Coleman",
    twitterUsername: "@docoleman36",
    nav: [
      {
        path: "/",
        name:
          "Donald Coleman — indie maker, serial entrepreneur, and full-stack developer",
      },
      { path: "/work", name: "Work" },
      { path: "/blog", name: "Blog" },
      { path: "/contact", name: "Contact" },
    ],
    // categories: [
    //   { slug: 'confidence', name: 'Confidence' },
    //   { slug: 'better-humans', name: 'Better Humans' },
    //   { slug: 'business-basics', name: 'Business Basics' },
    //   { slug: 'uncomfortable-things', name: 'Uncomfortable Things' },
    // ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-154561948-1",
      },
    },
  ],
}
