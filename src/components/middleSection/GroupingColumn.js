import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
  margin: 0 8px 0 8px;
  border: 2pt solid #c9d3dd;
  background-color: white;
  border-radius: 10px;
  width: 200px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;

class GroupingColumn extends React.Component {
  render() {
    return (
      <Container>
      </Container>
    );
  }
}

export default GroupingColumn;
