import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Head from "../component/head";
import '../styles/blog.scss'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }

`

const Blog = (props) => {
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
        <div className="blog-main">
            <Head title={props.data.contentfulBlogPost.title} />
            <article>
                <header>
                    <h1>{props.data.contentfulBlogPost.title}</h1>
                    <section>
                        <p>{props.data.contentfulBlogPost.publishedDate}</p>
                    </section>
                </header>
                <section>
                    {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
                </section>

            </article>
        </div>
    )
}

export default Blog;