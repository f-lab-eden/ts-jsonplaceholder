import React from 'react';
import styled from 'styled-components';

const Visual = () => {
    return (
        <Container>
            <Item>
            <Title>JSON Placeholder</Title>
           <Desc>
            <p>Free fake API for testing and prototyping. </p>
            <p>Powered by <a href="#!">JSON Server + LowDB</a> </p>
           <p>As of Oct 2021, serving ~1.7 billion requests each month. </p>
           </Desc> 
            </Item>
        </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content : center;
align-items: center;
background: #1e3a8a;
height: 560px;
color:#fff;
`;

const Item = styled.div`

`

const Title = styled.div`
font-size: 20px;
color: rgba(59, 130, 246, 0.5);
font-size: 60px;
line-height: 1;
`

const Desc = styled.div`
margin-top : 48px;
font-size: 30px;
a{
    text-decoration : underline;
    color: #fff;
}
p {
    margin-top : 38px;
}
`
export default Visual;
