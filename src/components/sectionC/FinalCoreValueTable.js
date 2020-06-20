import React from 'react';
import styled from 'styled-components';
import FinalCoreValueRow from './FinalCoreValueRow';
import selectedValuesData from '../../selected-values-data';

const Container = styled.div`
  margin: 8px;
  border: 1.5pt solid #c9d3dd;
  background-color: white;
  border-radius: 4px;
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

class FinalCoreValueTable extends React.Component {
  render() {
    return (
      <Container>
        {selectedValuesData.map((finalCoreValue, index) => (
          <FinalCoreValueRow key={index} finalCoreValue={finalCoreValue}/>
        ))}
      </Container>
    );
  }
}

export default FinalCoreValueTable;
