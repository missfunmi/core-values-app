import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
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
    if (this.props.displayMiddleSection) {
      this.props.displayMiddleSection();
    }
  }

  render() {

    return (
      <Button 
        enabled={this.props.shouldActivate}
        onClick={() => this.handleClick()}
      >Continue</Button>
    );
  }
}

export default ContinueButton;
