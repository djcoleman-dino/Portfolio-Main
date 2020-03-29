import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import logo from "../../public/icons/icon-512x512.png"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          baseUrl
          twitterUsername
        }
      }
    }
  `)

  const defaults = data.site.siteMetadata.title

  return (
    <Helmet
      title={`${title} | ${defaults}`}
      link={{
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: `${logo}`,
      }}
    >
      <link rel="canonical" href={`${defaults.baseUrl}`} />
      <meta name="description" content={`${defaults.description}`} />
      <meta name="image" content={`${logo}`} />

      <meta property="og:url" content={`${defaults.baseUrl}`} />
      <meta property="og:title" content={`${title}`} />
      <meta property="og:description" content={`${defaults.description}`} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={`${logo}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={`${defaults.twitterUsername}`} />
      <meta name="twitter:title" content={`${title}`} />
      <meta name="twitter:description" content={`${defaults.description}`} />
      <meta name="twitter:image" content={`${logo}`} />

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/css/bootstrap.min.css"
        integrity="sha384-SI27wrMjH3ZZ89r4o+fGIJtnzkAnFs3E4qz9DIYioCQ5l9Rd/7UAa8DHcaL8jkWt"
        crossorigin="anonymous"
      />
    </Helmet>
  )
}

export default Head
