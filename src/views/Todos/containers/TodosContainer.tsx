import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

import {todoItemData} from "../../../interfaces/todos.interface";
import List from '../components/List';

const TodosContainer = () => {

    const [todos, setTodos] = useState<todoItemData[]>([])

    const getTodos = async() => {
        const config : AxiosRequestConfig<{method: string, url:string}> = {
            method : 'get',
            url: 'https://jsonplaceholder.typicode.com/todos'
        }
        const result : AxiosResponse<todoItemData[]> = await axios(config)
        setTodos(result.data)
    }

    useEffect(() => {
        getTodos();
    }, [])

    return (
        <Container>
            {
                todos.length > 0 ? <List todos={todos}/> : '잠시 기다려주세용 :)'
            }

        </Container>
    )
}

const Container = styled.div`

`;
export default TodosContainer;