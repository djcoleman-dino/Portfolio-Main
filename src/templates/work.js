import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../component/layout'
import Head from '../component/head';

export const query = graphql`
    query($slug: String!) {
        contentfulProjects(slug: {eq: $slug}) {
            title
            description
            body {
                json
            }
        }
    }
`

const Work = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulProjects.title} />
            <h1>{props.data.contentfulProjects.title}</h1>
            <p>{props.data.contentfulProjects.description}</p>
            <div className="json-body">
            {documentToReactComponents(props.data.contentfulProjects.body.json, options)}
            </div>
        </Layout>
    )
}

export default Work
