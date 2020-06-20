import React from 'react';
import styled from 'styled-components';

// TODO - make a common component for this sectiona and top section
const Button = styled.div`
  border: 2px solid #c9d3dd;
  background-color: #c9d3dd;
  color: #ffffff;
  border-radius: 24px;
  margin-top: 10px;
  width: 85px;
  padding: 6px 25px;
  text-align: center;
  cursor: ${props => (props.enabled ? 'pointer' : 'default')};
  background-color: ${props => (props.enabled ? '#3b4754' : '#c9d3dd')};
  border: ${props => (props.enabled ? '2px solid #3b4754' : '2px solid #c9d3dd')};
`;

class ContinueButton extends React.Component {
  handleClick() {
    const shouldActivate = this.props.shouldActivate;
    // TODO: Lock the selections, do not allow them to be modified
    // Load the middle panel
  }

  render() {
    const selections = [];
    const isEnabled = selections.length;

    return (
      <Button 
        enabled={isEnabled}
        onClick={() => this.handleClick()}
      >Continue</Button>
    );
  }
}

export default ContinueButton;
