import React from "react"
import { Link } from "gatsby"

import Layout from "../component/layout"
import Head from "../component/head"

const Home = () => {
  return (
    <Layout>
      <Head title="DJ" />
      <div className="home-content">
        <h1 className="h1-top">Donald (DJ) Coleman</h1>
        <p>
          I am an Indie Maker, Serial Entrepreneur, Full-Stack Developer,
          Co-Founder of Entry Level, and student at Lambda School.
        </p>
        <p>
          I enjoy turning complex problems into beautiful functional websites.
          When I'm not coding or watching tutorials, you'll find me reading
          finance books/blogs, drinking coffee or traveling.
        </p>

        <div className="home-skills">
          <h4>Skills</h4>
          <p className="p-skills">
            React.js, Gatsby.js, Apollo, Context-API, Redux, Node.js,
            Express.js, GraphQL, SQL, PHP, Linode, AWS, and more.
          </p>
        </div>

        <div className="home-bottom">
          <h4>Let's Work Together</h4>
          <p>
            Interested in working together? Check out the{" "}
            <Link to="/contact">Contact Me</Link> page and get in touch.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Home
