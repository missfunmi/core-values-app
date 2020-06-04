import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  border: 2px solid #c9d3dd;
  background-color: #c9d3dd;
  color: #ffffff;
  border-radius: 24px;
  margin-top: 10px;
  width: 85px;
  padding: 6px 25px;
  text-align: center;
`;

class ContinueButton extends React.Component {
  render() {
    return (
      <Button>Continue</Button>
    );
  }
}

export default ContinueButton;
