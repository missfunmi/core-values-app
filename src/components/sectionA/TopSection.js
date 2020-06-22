import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import CoreValuePanel from './CoreValuePanel';
import ContinueButton from './ContinueButton';

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

class TopSection extends React.Component {
  render() {
    const hasSelectedCoreValues = this.props.hasSelectedCoreValues;
    const selections = this.props.selections;
    const isContinueButtonEnabled = (selections.length && !hasSelectedCoreValues) ? true : false;

    return (
      <Container>
        <Header/>
        <CoreValuePanel 
          coreValues={this.props.coreValues}
          selections={selections}
          updateSelections={this.props.updateSelections}
        />
        <ContinueButton 
          selections={selections} 
          shouldActivate={isContinueButtonEnabled}
          displayMiddleSection={this.props.displayMiddleSection}
        />
      </Container>
    );
  }
}

export default TopSection;
