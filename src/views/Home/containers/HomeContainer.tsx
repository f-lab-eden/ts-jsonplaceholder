import React from 'react';
import styled from 'styled-components';

import Visual from '../components/Visual/index';
import Intro from '../components/Intro';

const HomeContainer = () => {

    return (
        <Container>
            <Visual/>
            <Intro />
        </Container>
    )

}

const Container = styled.div`

`;

export default HomeContainer