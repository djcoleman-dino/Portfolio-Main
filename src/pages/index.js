import React from "react"
import { Link } from 'gatsby';

import Layout from "../component/layout"
import Head from "../component/head";


const Home = () => {
    return (
        <Layout>
            <Head title="Home" />
            <div className="home-content">
                <h1 className="h1-top">Hi, I'm Donald (DJ)</h1>
                <p>Currently, I am a Full-Stack Web Developer student at Lambda School.</p>
                <p>I enjoy turning complex problems into beautiful functional websites. When I'm not coding or watching tutorials, you'll find me reading finance books/blogs, drinking coffee or traveling.</p>

                <div className="home-skills">
                    <h4>Skills</h4>
                    <p className="p-skills">React.js, Gatsby.js, Apollo, Context-API, Redux, Node.js, Express, GraphQL, SQLite, SASS, LESS, Material-UI</p>
                </div>

                <div className="home-bottom">
                    <h4>Let's Work Together</h4>
                    <p>Interested in working together? Check out the <Link to="/contact">Contact Me</Link> page and get in touch.</p>
                </div>
            </div>
        </Layout>
    )
}

export default Home;
