import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';

const Container = styled.div`
  min-height: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: #dcebf3;
`;

const Main = () => {
  return (
    <Container>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/start' component={App}></Route>
      </Switch>
    </Container>
  );
};

export default Main;
