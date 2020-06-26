import React from 'react';
import styled from 'styled-components';
import FinalCoreValueRow from './FinalCoreValueRow';

const Container = styled.div`
  margin: 8px;
  border: 1px solid #c9d3dd;
  background-color: white;
  border-radius: 4px;
  width: 300px;
  min-height: 300px;
  display: 'flex';
  flex-direction: column;
  padding: 10px 20px;
`;

const Title = styled.h3`
  text-align: left;
  padding-left: 8px;
`;

const Highlight = styled.span`
  color: #e04b11;
`;

class FinalCoreValueTable extends React.Component {
  coreValueText(coreValueId) {
    const coreValues = this.props.coreValues;
    const coreValue = coreValues.find(({ id }) => id === coreValueId);
    return coreValue?.text || '<re-select>';
  }

  render() {
    const finalFive = this.props.topFiveCoreValues;
    const columns = Object.keys(finalFive);
    return (
      <Container>
        <Title>
          Your <Highlight>core</Highlight> values are...
        </Title>
        {columns.map((column, index) => (
          <FinalCoreValueRow
            key={finalFive[column]} 
            index={index} 
            coreValueId={finalFive[column]}
            text={this.coreValueText(finalFive[column])}
          />
        ))}
      </Container>
    );
  }
}

export default FinalCoreValueTable;
