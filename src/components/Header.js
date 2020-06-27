import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Container = styled.div`
  text-align: center;
`;

const Title = styled.img`
  padding: 8px;
  max-width: 40%;
  height: auto;
  cursor: pointer; 
`;

class Header extends React.Component {
  render() {
    return (
      <Container>
        <Link to='/'><Title src={logo} alt='Your Core Values'/></Link>
      </Container>
    );
  }
}

export default Header;
