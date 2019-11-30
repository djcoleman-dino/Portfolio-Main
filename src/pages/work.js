import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";

import '../styles/work.scss';

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
                        image {
                            fluid(maxWidth: 400, maxHeight: 400){
                                src
                            }
                        }
                    }
                }
            }
        } 
    `)

    return (
        <Layout>
            <Head title="Work" />
            <h1 className="h1-top">Work</h1>
            <p>Here is a small collection of projects that I've worked on over the year.</p>
                <div className="card-container">
                    {data.allContentfulProjects.edges.map((edge) => {
                        return (
                            <Link to={`/work/${edge.node.slug}`}>
                                <div className="card" key={edge.node.id}>
                                    <Img className="card-img-top" alt="top" fluid={edge.node.image.fluid} />
                                    <div className="card-body">
                                        <h1 className="card-title">{edge.node.title}</h1>
                                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                        <p className="card-text">{edge.node.description}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
        </Layout>
    )
}

export default Work;
