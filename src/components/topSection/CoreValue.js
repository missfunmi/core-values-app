import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  text-align: center;
  border-radius: 20px;
  padding: 6px 25px;
  margin-bottom: 10px;
  margin-right: 5px;
  cursor: pointer;
  color: ${props => (props.selected ? '#ffffff': '#798da3')};
  background-color: ${props => (props.selected ? '#3d8af7': '#ffffff')};
  border: ${props => (props.selected ? '2px solid #3d8af7': '2px solid #c9d3dd')};
`;

class CoreValue extends React.Component {
  handleClick(coreValue) {
    this.props.updateSelections(coreValue);
  }

  render() {
    const coreValue = this.props.text;
    const currentlySelected = this.props.selected;

    return (
      <Button 
        onClick={() => this.handleClick(coreValue)} 
        selected={currentlySelected}
      >
        {this.props.text}
      </Button>
    )
  }
}

export default CoreValue;
