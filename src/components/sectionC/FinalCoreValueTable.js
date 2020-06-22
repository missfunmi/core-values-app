import React from 'react';
import styled from 'styled-components';
import FinalCoreValueRow from './FinalCoreValueRow';

const Container = styled.div`
  margin: 8px;
  border: 1.5pt solid #c9d3dd;
  background-color: white;
  border-radius: 4px;
  width: 400px;
  min-height: 300px;
  display: ${props => (props.topFiveCoreValues.length > 0 ? 'flex' : 'none')};
  flex-direction: column;
  padding: 10px 20px;
`;

class FinalCoreValueTable extends React.Component {
  coreValueText(coreValueId) {
    const coreValues = this.props.coreValues;
    const coreValue = coreValues.find(({ id }) => id === coreValueId);
    return coreValue?.text || '<not yet selected>';
  }

  render() {
    const finalFive = this.props.topFiveCoreValues;
    return (
      <Container topFiveCoreValues={this.props.topFiveCoreValues}>
        {finalFive.map((coreValueId, index) => (
          <FinalCoreValueRow
            key={coreValueId} 
            index={index} 
            coreValueId={coreValueId}
            text={this.coreValueText(coreValueId)}
          />
        ))}
      </Container>
    );
  }
}

export default FinalCoreValueTable;
