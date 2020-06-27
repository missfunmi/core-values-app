import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  margin-top: auto;
`;

const Blurb = styled.div`
  align-self: flex-end;
  padding: 10px;
  font-size: 10px;
  font-family: 'open_sansregular', sans-serif;
`;

const Icon = styled.span`
  color: #3d8af7;
  font-size: 1em;
`

const HyperLink = styled.a`
  text-decoration: none;
  color: #3d8af7;
  &:hover {
    color: #e04b11;
    text-decoration: none;
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Blurb>Made with <Icon><FontAwesomeIcon icon={faHeart} /></Icon> in NYC by <HyperLink href="https://github.com/missfunmi">@missfunmi</HyperLink></Blurb>
      </Container>
    );
  }
}

export default Footer;
