import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios, { AxiosResponse } from 'axios';

import List from '../components/List/index';
import {IUserItemData} from '../../../interfaces/users.interface';

const UserInfoContainer = () => {

    const [userInfo, setUserInfo] = useState<IUserItemData[]>([])

    const getUserInfo = async () => {
        const result : AxiosResponse<IUserItemData[]> = await axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users'
        })
        setUserInfo(result.data)
        console.log(result.data) 
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <Container>
            {
                !userInfo.length ? '...loading' : <List data={userInfo}/>

            }
        </Container>
    )
}

const Container = styled.div`

`;

export default UserInfoContainer;
