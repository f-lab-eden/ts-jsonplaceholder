import React from 'react';
import styled from 'styled-components';

import {todoItemData} from "../../../../interfaces/todos.interface";
import Item from '../Item';

interface Props {
    todos: todoItemData[]
}

const List = ({todos} : Props) => {
    return (
        <Container>
            <Row>
                {
                    todos.map((item) => (
                        <Col key={item.id}>
                            <Item item={item}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

const Container = styled.div`

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
    width: 25%;
`;
export default List;