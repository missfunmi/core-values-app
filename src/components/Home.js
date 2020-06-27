import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import reading from '../images/reading.png';

const Container = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  padding: 8px;
  max-width: 60%;
  height: auto;
`;

const Reading = styled.img`
  padding: 8px;
  max-width: 50%;
  height: auto;
  margin-top: 50px;
`;

const Subtext = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  width: 80%;
`;

const Button = styled.button`
  color: #ffffff;
  border-radius: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 150px;
  padding: 6px 25px;
  text-align: center;
  background-color: #3b4754;
  border: 2px solid #3b4754;
  font-size: 14px;
  cursor: pointer; 
`;

const Home = () => {
  return (
    <Container>
      <Reading src={reading} alt='Girl reading a book' />
      <Logo src={logo} alt='Your Core Values' />
      <Subtext>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Subtext>
      <Link to='/start'><Button>Get Started</Button></Link>
    </Container>
  );
};

export default Home;
