import React from 'react';
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import logo from '../../public/icons/icon-512x512.png'

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Helmet
            title={`${title} | ${data.site.siteMetadata.title}`}
            link={{ rel: "icon", type: "image/png", sizes: "512x512", href: `${logo}` }}
        >
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.0/css/bootstrap.min.css" integrity="sha384-SI27wrMjH3ZZ89r4o+fGIJtnzkAnFs3E4qz9DIYioCQ5l9Rd/7UAa8DHcaL8jkWt" crossorigin="anonymous" />
        </Helmet>
    )
}

export default Head