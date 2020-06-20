import React from 'react';
import styled from 'styled-components';
import FinalCoreValueTable from './FinalCoreValueTable';

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class FinalCoreValuePanel extends React.Component {
  render() {
    return (
      <Container>
        <FinalCoreValueTable/>
      </Container>
    );
  }
}

export default FinalCoreValuePanel;
