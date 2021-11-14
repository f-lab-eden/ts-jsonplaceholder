import React from 'react';
import styled from 'styled-components';

import {IUserItem} from "../../../interfaces/users.interface";

const Item = ({item}: IUserItem) => {
    return (
        <Container>
            <ItemBox>
                <Id>{item.id}</Id>
                <Name>{item.name}</Name>
                {
                    item.email && <Email>{item.email}</Email>

                }
            </ItemBox>
        </Container>
    )
}

const Container = styled.div`

`;

const ItemBox = styled.div`
  padding: 20px;
  margin: 20px;
  border: 1px solid #d1d1d1;
  border-radius: 24px;

`;

const Id = styled.div`
  font-size: 18px;
  color: rgb(73, 80, 87);
`;

const Name = styled.div`
  font-size: 24px;
  color: #212529;
`;

const Email = styled.div`
  font-size: 17px;
  line-height: 20px;
  color: rgb(18, 184, 134);
`;

export default Item;
