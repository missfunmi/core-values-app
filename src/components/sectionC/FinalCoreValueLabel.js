import React from 'react';
import styled from 'styled-components';

const Label = styled.div`
  color: #3b4754;
  font-size: 16px;
  font-family: 'open_sansregular', sans-serif;
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
