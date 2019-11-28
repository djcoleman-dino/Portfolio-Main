import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from "../component/layout"
import Head from "../component/head";


const Work = props => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulProjects {
                edges {
                    node {
                        id
                        title
                        slug
                        description
                    }
                }
            }
        } 
    `)

    return (
        <Layout>
            <Head title="Work" />
            <h1>Work</h1>
            <ol>
                {data.allContentfulProjects.edges.map((edge) => {
                    return (
                        <li key={edge.node.id}>
                            <Link to={`/work/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.description}</p>
                            </Link>
                        </li>
                    )
                })}

            </ol>
        </Layout>
    )
}

export default Work;
