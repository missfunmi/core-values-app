import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Container = styled.footer`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
`;

const Blurb = styled.div`
  align-self: flex-end;
  padding: 10px;
  font-size: 10px;
  color: lightgrey;
  font-family: 'open_sansregular', sans-serif;
`;

const pulse = keyframes`
  0%, 100% {
    color: #3d8af7;
  }
  50% {
    color: #3b4754;
  }
`;

const Icon = styled.span`
  color: #3d8af7;
  font-size: 1em;
  animation: ${pulse} 1.2s infinite;
`;

const HyperLink = styled.a.attrs({ 
  target: '_blank',
  href: 'https://missfunmi.com'
})`
  text-decoration: none;
  color: #3b4754;
  &:hover {
    color: #3d8af7;
    text-decoration: none;
  }
`;

const TaprootLink = styled.a.attrs({ 
  target: '_blank',
  href: 'https://www.taproot.com/live-your-core-values-exercise-to-increase-your-success'
})`
  text-decoration: none;
  color: #3b4754;
  &:hover {
    color: #3d8af7;
    text-decoration: none;
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Blurb>Inspired by the <TaprootLink>Live Your Core Values Exercise by TapRoot</TaprootLink></Blurb>
        <Blurb>Made with <Icon><FontAwesomeIcon icon={faHeart} /></Icon> in NYC by <HyperLink>missfunmi</HyperLink></Blurb>
      </Container>
    );
  }
}

export default Footer;
