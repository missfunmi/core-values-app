import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import CoreValueTable from './CoreValueTable';
import ContinueButton from './ContinueButton';

const Container = styled.div`
  font-family: 'Optima';
  padding: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

class TopPanel extends React.Component {
  render() {
    return (
      <Container>
        <Header/>
        <CoreValueTable/>
        <ContinueButton/>
      </Container>
    );
  }
}

export default TopPanel;
