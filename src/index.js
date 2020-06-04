import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import TopPanel from './components/TopPanel';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const App = () => (
  <Container>
    <TopPanel/>
  </Container>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
