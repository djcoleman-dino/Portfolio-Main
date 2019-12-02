import React from 'react';
import { Link } from 'gatsby';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import navStyle from '../styles/nav.module.scss';

const Header = () => {
    return (
        <div className={navStyle.header}>
            <h1>Navigation</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/work">Work</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Me</Link>
                    </li>
                </ul>
            </nav>

            <div className={navStyle.footer}>
                <ul className="icons">
                    <li>
                        <a href="https://www.linkedin.com/in/djcoleman479/">
                            <LinkedInIcon>Icon</LinkedInIcon>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/docoleman36">
                            <GitHubIcon>Icon</GitHubIcon>
                        </a>
                    </li>
                    <li>
                        <a href="djcoleman477@gmail.com">
                            <MailOutlineIcon>Icon</MailOutlineIcon>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;