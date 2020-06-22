import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
  color: #3b4754;
  padding: 10px 18px;
  font-size: 18px;
  font-family: 'open_sansregular', sans-serif;
  width: 40%;
  text-align: left;
`;

class FinalCoreValueLabel extends React.Component {
  render() {
    return (
      <Label>
        {this.props.text}
      </Label>
    )
  }
}

export default FinalCoreValueLabel;
