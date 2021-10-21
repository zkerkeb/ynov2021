import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/loginForm';
import StyledCounter from '../components/styledCounter';
import Layout from '../components/layout';
import { useHistory } from 'react-router';

const Login = props => {
    const history = useHistory();
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            history.push('/characters')
        } 
    }, [])
    return (
        <div>
            <p>Login</p>
            <LoginForm></LoginForm>
            <StyledCounter></StyledCounter >
            <Layout label="test" coco={()=> <><p>ENFANT</p>
                <p>ENFANT C LA VIE</p>
                </>
                }>
                
            </Layout>
            <Layout label="wai">
                <p>ENFANT LEGITIME</p>
            </Layout>
            <Layout ></Layout>
        </div>
    );
};

Login.propTypes = {
    
};

export default Login;