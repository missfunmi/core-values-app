import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import CoreValuePanel from './CoreValuePanel';
import ContinueButton from './ContinueButton';

const Container = styled.div`
  padding: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 92%;
`;

class TopSection extends React.Component {
  render() {
    return (
      <Container>
        <Header/>
        <CoreValuePanel/>
        <ContinueButton/>
      </Container>
    );
  }
}

export default TopSection;
