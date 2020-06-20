import React from 'react';
import styled from 'styled-components';
import GroupingColumnPanel from './GroupingColumnPanel';
import ContinueButton from './ContinueButton';

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  padding: 10px;
`;

class MiddleSection extends React.Component {
  render() {
    const selections = this.props.selections;
    const allColumnValues = 
      Object.values(this.props.columns)
            .reduce((accumulator, column) => accumulator.concat(column.coreValues),[]);
    const shouldActivate = selections.length > 0 
                          && selections.length === allColumnValues.length 
                          && selections.every(selection => allColumnValues.includes(selection));
    return (
      <Container>
        <GroupingColumnPanel coreValues={this.props.coreValues} columns={this.props.columns}/>
        <ContinueButton shouldActivate={shouldActivate}/>
      </Container>
    );
  }
}

export default MiddleSection;
