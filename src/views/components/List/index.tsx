import React from 'react';
import styled from 'styled-components';

import Item from '../Item';
import {IUserItemData} from "../../../interfaces/users.interface";

interface Props {
    data: IUserItemData[]
}

const List = ({data} : Props) => {
    console.log(data)
    return (
        <Container>
            {
                data.map((item) => <Item key={item.id} item={item}/>)
            }
        </Container>
    )
}

const Container = styled.div`

`;
export default List;
