import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import {todoItemData} from "../../../../interfaces/todos.interface";

interface Props {
    item: todoItemData
}

const Item = ({item}: Props) => {
    return (
        <Container>
            <ItemBox>
                <Id>{item.id}</Id>
                <Title className={cn({isCompleted: item.completed})}>{item.title}</Title>
            </ItemBox>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
`;

const ItemBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  margin: 20px;
  border: 1px solid #aaa;
  border-radius: 7px;
  cursor: pointer;

  transition: 0.2s;
  
  &:hover {
    transform: translateY(20px);
  }
`;

const Id = styled.div`
  margin-right: 10px;
  font-weight: 700;
`;

const Title = styled.div`
  &.isCompleted {
    text-decoration: line-through;
    color: rgb(255, 0, 0);
  }
`;
export default Item;