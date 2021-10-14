import React from 'react';
import PropTypes from 'prop-types';
import styled  from 'styled-components'

const StyledCounter = props => {
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
`

const CounterValue = styled.span``

StyledCounter.propTypes = {
    
};

export default StyledCounter;