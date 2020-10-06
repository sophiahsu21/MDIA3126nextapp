import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color:${props=>props.bgcolor ? props.bgcolor: "#defecd"};
    min-height:100vh;
`;


const Content = ({children, bgcolor}) =>{
    return <Container bgcolor={bgcolor}>
        {children}
    </Container>
}

Content.defaultProps = {
    bgcolor:"#defecd"
}

export default Content;