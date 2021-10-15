import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled  from 'styled-components'

const StyledCounter = props => {
    useEffect(() => {
        console.log(process.env.REACT_APP_PRIVATE_KEY)
    },[])
    return (
        <>
        <CounterContainer >
                <CounterValue>0</CounterValue>
        </CounterContainer>
           <CounterContainer secondary>
           <CounterValue>0</CounterValue>
   </CounterContainer>
   </>
       
    );
};

const CounterContainer = styled.div`
    padding: 12px;
    background-color: ${props => props.secondary  ?  props.theme.secondary : props.theme.primary} ;
    transition: background-color 1s ease-in-out;
    &:hover{
        background-color: blue;
    }
`

const CounterValue = styled.span``

StyledCounter.propTypes = {
    
};

export default StyledCounter;