import React from 'react';
import styled from "styled-components";

import TodosContainer from '../views/Todos/containers/TodosContainer';

const Todos = () => {
    return (
        <Container>
            <TodosContainer/>
        </Container>
    )
}

const Container = styled.div`

`;
export default Todos;