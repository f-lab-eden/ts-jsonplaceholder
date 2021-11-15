import React from 'react';
import styled from 'styled-components';
import {Routes, Route} from 'react-router-dom';

import {GlobalStyle} from './styled/GlobalStyle';
import Home from './pages/Home';
import Users from './pages/Users';
import Todos from './pages/Todos';

function App() {

    return (
        <Container>
            <GlobalStyle/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/todos' element={<Todos/>}/>
            </Routes>
        </Container>
    );
}

const Container = styled.div`

`;

export default App;
