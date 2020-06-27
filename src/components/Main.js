import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Footer from './Footer';

const Container = styled.div`
  height: 100%;
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
      <Footer/>
    </Container>
  );
};

export default Main;
