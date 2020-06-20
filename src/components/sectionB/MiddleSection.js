import React from 'react';
import styled from 'styled-components';
import GroupingColumnPanel from './GroupingColumnPanel';
import ContinueButton from './ContinueButton';

const Container = styled.div`
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  padding: 10px;
  display: ${props => (props.hasSelectedCoreValues ? 'flex' : 'none')}; 
`;

class MiddleSection extends React.Component {
  render() {
    const hasSelectedCoreValues = this.props.hasSelectedCoreValues;
    const selections = this.props.selections;
    const allColumnValues = 
      Object.values(this.props.columns)
            .reduce((accumulator, column) => accumulator.concat(column.coreValues),[]);
    const isContinueButtonEnabled = selections.length > 0 
                                    && selections.length === allColumnValues.length 
                                    && selections.every(selection => allColumnValues.includes(selection));
    return (
      <Container hasSelectedCoreValues={hasSelectedCoreValues}>
        <GroupingColumnPanel 
          coreValues={this.props.coreValues} 
          columns={this.props.columns}
        />
        <ContinueButton 
          shouldActivate={isContinueButtonEnabled} 
          displayBottomSection={this.props.displayBottomSection}
          hasSelectedCoreValues={hasSelectedCoreValues}
        />
      </Container>
    );
  }
}

export default MiddleSection;
