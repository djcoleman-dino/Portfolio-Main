import React from "react"
import Layout from "../component/layout"

import '../styles/contact.scss'
import Head from "../component/head"


const Contact = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <div className="contact">
                <h1 className="h1-top">Contact</h1>
                <p>I have experience as a Full-Stack developer and have worked on a variety of websites.</p>
                <p>If you need help with full-stack development ( mostly React.js, Node.js) or if you would like more information, send me an email at <a href="mailto: djcoleman477@gmail.com">djcoleman477@gmail.com</a></p>
                <p>I look forward to working together in the future!</p>
            </div>
        </Layout>
    )
}

export default Contact;
