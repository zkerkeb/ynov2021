import React from 'react';
import PropTypes from 'prop-types';
import { Link,useHistory } from 'react-router-dom';

const Navigation = props => {
    const history = useHistory()
    console.log("🚀 ~ file: index.js ~ line 7 ~ history", history)
    return (
        <nav>
              <Link to="/">Login</Link>
              <Link to="/characters">Characters</Link> 
              <p onClick={() => history.push('/')}> LOGIN HISTORY</p>
              <p onClick={() => history.push('/characters')}> CHARACTERS HISTORY</p>
              <p onClick={() => history.goBack()}> Retour</p>
        </nav>
    );
};

Navigation.propTypes = {
    
};

export default Navigation;