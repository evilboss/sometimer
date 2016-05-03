import React from 'react';

const Layout = ({head = () => null,content =() =>null, footer =() =>null}) => (
    <div>
        <div>
            {head()}
            {content()}
            {footer()}
        </div>
    </div>
);

export default Layout;
