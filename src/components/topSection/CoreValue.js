import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  border: 2pt solid #c9d3dd;
  text-align: center;
  color: #798da3;
  border-radius: 24px;
  padding: 6px 25px;
  margin-bottom: 10px;
  margin-right: 5px;
`;

class CoreValue extends React.Component {
  render() {
    return (
      <Button>
        {this.props.text}
      </Button>
    )
  }
}

export default CoreValue;
