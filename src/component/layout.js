import React from 'react';

import Nav from './nav';
import '../styles/index.scss';
import layoutStyles from '../styles/layout.module.scss';

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Nav/>
                <div className={layoutStyles.main}>
                    {props.children}
                </div>
            </div>
        </div>

    )
}
export default Layout;