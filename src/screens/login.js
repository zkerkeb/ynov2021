import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/loginForm';
import StyledCounter from '../components/styledCounter';

const Login = props => {
console.log("🚀 ~ file: login.js ~ line 5 ~ props", props)
    return (
        <div>
            <p>Login</p>
            {/* <LoginForm></LoginForm> */}
            <StyledCounter></StyledCounter >
        </div>
    );
};

Login.propTypes = {
    
};

export default Login;