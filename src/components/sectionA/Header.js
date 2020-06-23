import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';

const Container = styled.div`
  margin-bottom: 14px;
`;
const Title = styled.img`
  padding: 8px;
  max-width: 40%;
  height: auto;
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
        <Title src={logo} alt='My Core Values'/>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Container>
    );
  }
}

export default Header;
