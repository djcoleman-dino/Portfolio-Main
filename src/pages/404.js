import React from 'react'
import { Link } from 'gatsby'

import Layout from '../component/layout'

const NotFound = () => {
    return (
        <Layout>
            <h1 className="h1-top">Page not Found</h1>
            <p>Please head to my home page to checkout my other links<Link to="/"> Home</Link></p>
            <img alt="gif" src="https://i.gifer.com/HjXw.gif" />
        </Layout>
    )
}

export default NotFound