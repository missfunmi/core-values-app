import React from 'react';
import styled from 'styled-components';
import GroupingColumnPanel from './GroupingColumnPanel';
import ContinueButton from './ContinueButton';

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 93%;
  padding: 50px;
`;

class MiddleSection extends React.Component {
  render() {
    return (
      <Container>
        <GroupingColumnPanel/>
        <ContinueButton/>
      </Container>
    );
  }
}

export default MiddleSection;
