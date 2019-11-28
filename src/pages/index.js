import React from "react"
import { Link } from 'gatsby';

import Layout from "../component/layout"
import Head from "../component/head";


const Home = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Hi, I'm Donald</h1>
            <p>I'm a Full-Stack developer</p>

            <h2>Let's Work Together</h2>
            <p>Interested in working together? Check out the <Link to="/contact">Contact Me</Link> page and get in touch.</p>
        </Layout>
    )
}

export default Home;
