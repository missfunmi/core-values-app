import React from 'react';
import styled from 'styled-components';
import FinalCoreValueLabel from './FinalCoreValueLabel';
import FinalCoreValueStatement from './FinalCoreValueStatement';

const Container = styled.div`
  border: 1pt solid #c9d3dd;
  width: 100%;
  color: #798da3;
  display: flex;
  justify-content: space-between;
`;

class FinalCoreValueRow extends React.Component {
  render() {
    return (
      <Container>
        <FinalCoreValueLabel text={this.props.finalCoreValue}/>
        <FinalCoreValueStatement/>
      </Container>
    )
  }
}

export default FinalCoreValueRow;
