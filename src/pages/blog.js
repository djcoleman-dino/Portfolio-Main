import React from "react"
import Layout from "../component/layout"
import Head from "../component/head"

import '../styles/blog.scss'


const Blog = () => {
    return (
        <Layout>
            <Head title="Blog" />
            <div className="blog-page">
                <h1 className="h1-top">Blog</h1>
                <h6>Coming soon..</h6>
            </div>
        </Layout>
    )
}

export default Blog;
