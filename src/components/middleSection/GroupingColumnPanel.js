import React from 'react';
import styled from 'styled-components';
import GroupingColumn from './GroupingColumn';

const Container = styled.div `
  border: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding-bottom: 20px;
`;

class GroupingColumnPanel extends React.Component {
  render() {
    return (
      <Container>
        <GroupingColumn/>
        <GroupingColumn/>
        <GroupingColumn/>
        <GroupingColumn/>
        <GroupingColumn/>
      </Container>
    );
  }
}

export default GroupingColumnPanel;
