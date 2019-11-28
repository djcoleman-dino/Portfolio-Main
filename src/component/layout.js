import React from 'react';

import Header from './header';
import '../styles/index.scss';
import layoutStyles from '../styles/layout.module.scss';

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header/>
                <div className={layoutStyles.main}>
                    {props.children}
                </div>
            </div>
        </div>

    )
}
export default Layout;