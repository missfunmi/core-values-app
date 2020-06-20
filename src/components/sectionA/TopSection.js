import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import CoreValuePanel from './CoreValuePanel';
import ContinueButton from './ContinueButton';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
`;

class TopSection extends React.Component {
  render() {
    const selections = this.props.selections;
    const isDoneSelecting = true; // TODO
    // const update = this.props.updateSelections;
    // console.log(`in TopSection,  updateSelections: ${update}`);
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
          shouldActivate={isDoneSelecting}/>
      </Container>
    );
  }
}

export default TopSection;
