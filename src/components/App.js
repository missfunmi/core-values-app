import React from 'react';
import styled from 'styled-components';
import TopSection from './topSection/TopSection';
import MiddleSection from './middleSection/MiddleSection';
import BottomSection from './bottomSection/BottomSection';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: 'Optima';
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTopPanelDoneSelecting: false
    }
  }

  render() {
    return (
      <Container>
        <TopSection 
          isDoneSelecting={this.state.isTopPanelDoneSelecting}
        />
        <MiddleSection/>
        <BottomSection/>
      </Container>
    );
  }
}

export default App;
