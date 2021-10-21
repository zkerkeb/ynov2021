import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({label, children, coco: Coco = () => null}) => {
    return (
        <div>
            <p>{label}</p>
            <p>LAYOUT</p>
            {children}
            <Coco></Coco>
        </div>
    );
};

Layout.propTypes = {
    
};

export default Layout;