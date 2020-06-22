import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 14px;
`;
const Title = styled.h1`
  padding: 8px;
  font-size: 120px;
`;
const Text = styled.div`
  font-size: 14px;
  color: #798da3;
  padding: 0 10px 0;
`;

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Title>My Core Values</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Container>
    );
  }
}

export default Header;
