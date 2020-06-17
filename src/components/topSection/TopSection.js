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
  constructor(props) {
    super(props);
    this.state = {
      selections: [],
    };
    this.updateSelections = this.updateSelections.bind(this);
  }

  // TODO update logic to use splice
  updateSelections(selection) {
    const updatedSelections = Array.from(this.state.selections);
    if (updatedSelections.includes(selection)) {
      const indexToRemove = updatedSelections.indexOf(selection);
      updatedSelections.splice(indexToRemove, 1);
    } else {
      updatedSelections.push(selection);
      updatedSelections.sort();
    }
    this.setState({
      selections: updatedSelections
    });
  }

  render() {
    return (
      <Container>
        <Header/>
        <CoreValuePanel 
          coreValues={this.props.coreValues}
          selections={this.state.selections}
          updateSelections={this.updateSelections}
        />
        <ContinueButton 
          selections={this.state.selections} 
          shouldActivate={this.props.isDoneSelecting}/>
      </Container>
    );
  }
}

export default TopSection;
