import React, {useState, useEffect} from 'react';
import styled, { css } from 'styled-components';

const ButtonBox = styled.button `
    background-color:${props=>props.highlight === true ? "#FAD" : "#FFF" };
    color: #FFF;
    padding: 7px;
    ${props=>props.highlight && css`
        margin: 10px;
        padding: 15px;
    `}
`;

const ButtonIcon = styled.img `
    background-color: #fff;
`;

const Button = () => {
    return <ButtonBox highlight={true}>
        <ButtonIcon src='/expand.png' />
        Button
    </ButtonBox>
}

export default Button;