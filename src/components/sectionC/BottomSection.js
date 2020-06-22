import React from 'react';
import styled from 'styled-components';
import FinalCoreValuePanel from './FinalCoreValuePanel';

const Container = styled.div`
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: ${props => (props.hasGroupedCoreValues ? 'flex' : 'none')}; 
`;

class BottomSection extends React.Component {
  render() {
    const hasGroupedCoreValues = this.props.hasGroupedCoreValues;
    return (
      <Container hasGroupedCoreValues={hasGroupedCoreValues}>
        <FinalCoreValuePanel
          coreValues={this.props.coreValues}
          topFiveCoreValues={this.props.topFiveCoreValues}
        />
      </Container>
    );
  }
}

export default BottomSection;
