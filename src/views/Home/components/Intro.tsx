import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Intro = () => {
    return (
        <Container>
            <Item>
                <Title>Resources</Title>
                <Desc>
                    <p>JSONPlaceholder comes with a set of 6 common resources:</p>
                    <Resource>
                        <ResourceItem>
                            <ResourceUrl>
                                <Link to='/todos'>/todos</Link>
                            </ResourceUrl>
                            <ResourceInfo>
                                200 todos
                            </ResourceInfo>
                        </ResourceItem>
                        <ResourceItem>
                            <ResourceUrl>
                                <Link to='/users'>/users</Link>
                            </ResourceUrl>
                            <ResourceInfo>
                                10 users
                            </ResourceInfo>
                        </ResourceItem>
                    </Resource>
                    <p>Note: resources have relations. For example: posts have many comments, albums have many photos,
                        ... see <a href="#!">guide</a> for the full list.</p>
                </Desc>
            </Item>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  margin: 24px;
`

const Title = styled.div`
  font-size: 20px;
  color: #111;
`

const Desc = styled.div`
  margin-top: 48px;
  font-size: 18px;

  a {
    text-decoration: underline;
    color: #3498db;
  }

  p {
    margin-top: 38px;
  }
`

const Resource = styled.div`
  margin: 20px 0;
`

const ResourceItem = styled.div`
  display: flex;
  margin: 20px 0;
`;

const ResourceUrl = styled.div`
  margin-right: 20px;
`

const ResourceInfo = styled.div`

`
export default Intro;
