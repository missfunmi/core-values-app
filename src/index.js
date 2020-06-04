import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import TopSection from './components/topSection/TopSection';
import MiddleSection from './components/middleSection/MiddleSection';
import BottomSection from './components/bottomSection/BottomSection';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: 'Optima';
`;

const App = () => (
  <Container>
    <TopSection/>
    <MiddleSection/>
    <BottomSection/>
  </Container>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
