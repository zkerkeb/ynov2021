import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";

const Evil = props => {
    const location = useLocation()
    console.log("🚀 ~ file: evil.js ~ line 7 ~ match", location)
console.log("🚀 ~ file: evil.js ~ line 5 ~ props", props)

    return (
        <div>
            <h1>Evil</h1>
            <p>{location.state.character.name}</p>
        </div>
    );
};

Evil.propTypes = {
    
};

export default Evil;