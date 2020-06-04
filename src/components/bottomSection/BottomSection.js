import React from 'react';
import styled from 'styled-components';
import FinalCoreValuePanel from './FinalCoreValuePanel';

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 93%;
  padding: 50px;
`;

class BottomSection extends React.Component {
  render() {
    return (
      <Container>
        <FinalCoreValuePanel/>
      </Container>
    );
  }
}

export default BottomSection;
