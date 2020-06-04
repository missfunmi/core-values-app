import React from 'react';
import styled from 'styled-components';
import CoreValue from './CoreValue';
import valuesData from '../../values-data';

const Container = styled.div `
  border: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 20px;
`;

class CoreValuePanel extends React.Component {
  render() {
    return (
      <Container>
        {valuesData.map((coreValue, index) => (
          <CoreValue key={index} text={coreValue}/>
        ))}
      </Container>
    );
  }
}

export default CoreValuePanel;
