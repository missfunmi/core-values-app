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
  max-width: 50%;
  height: auto;
  margin-top: -10px;
`;

const Reading = styled.img`
  padding: 8px;
  max-width: 40%;
  height: auto;
  margin-top: 100px;
`;

const Subtext = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 80%;
`;

const Button = styled.button`
  color: #ffffff;
  border-radius: 24px;
  margin-top: 30px;
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
        Discover your personal core values and get inspired to live by them every day.
      </Subtext>
      <Link to='/start'><Button>Get Started</Button></Link>
    </Container>
  );
};

export default Home;
