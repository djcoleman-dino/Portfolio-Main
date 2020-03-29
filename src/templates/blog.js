import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Head from "../component/head"
import "../styles/blog.scss"

export const query = graphql`
  query Post($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      image {
        fluid(maxWidth: 400, maxHeight: 400) {
          src
        }
      }
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <>
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
            {documentToReactComponents(
              props.data.contentfulBlogPost.body.json,
              options
            )}
          </section>
          <footer>
            <hr />
            <div className="bottom-footer">
              <div>
                <Img fluid={props.data.contentfulBlogPost.image.fluid} />
              </div>
              <div>
                <p>WRITTEN BY</p>
                <h3>Donald Coleman</h3>
                <p>Full Stack Web Developer Student @ Lambda School</p>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </>
  )
}

export default Blog
