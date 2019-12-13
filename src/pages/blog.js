import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from "../component/layout"
import Head from "../component/head"

import '../styles/blog.scss'


const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (sort: { fields: publishedDate, order: DESC } ) {
                edges {
                    node {
                        id
                        title
                        slug
                        publishedDate(formatString: "MMMM Do, YYYY")
                    }
                }
            }
        }  
`)


    return (
        <Layout>
            <Head title="Blog" />
            <div className="blog-page">
                <h1 className="h1-top">Blog</h1>
                <p>This is where I write about topics that interest me such as programming, side projects, and finance.</p>

                <h3>Recent Posts</h3>
                <ol>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li key={edge.node.id}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h4>{edge.node.title}</h4>
                                    <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </Layout>
    )
}

export default Blog;
