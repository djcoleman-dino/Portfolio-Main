import React from 'react';
import { Helmet } from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

import logo from '../../public/icons/icon-512x512.png'

const Head  = ({ title }) => {
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
        />
    )
}

export default Head