import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Div100h from 'react-div-100vh';
import App from './App';
import Home from './Home';
import Footer from './Footer';

const Container = styled.div`
  height: 100%;
`;

const Main = () => {
  return (
    <Container>
      <Div100h style={{'min-height': 'calc(100rvh - 50px)', 'padding-bottom': '0'}}>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/start' component={App}></Route>
        </Switch>
      </Div100h>
      <Footer/>
    </Container>
  );
};

export default Main;
