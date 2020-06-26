import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import CoreValuePanel from './CoreValuePanel';
import ContinueButton from './ContinueButton';

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  pointer-events: ${props => (props.hasGroupedCoreValues ? 'none' : 'auto')};
`;

const TopSection = ({
  hasSelectedCoreValues,
  hasGroupedCoreValues,
  coreValues,
  selections,
  updateSelections,
  displayMiddleSection,
  ...props
}) => {
  const isContinueButtonEnabled = (selections.length && !hasSelectedCoreValues) ? true : false;

  return (
    <Container hasGroupedCoreValues={hasGroupedCoreValues}>
      <Header />
      <CoreValuePanel
        coreValues={coreValues}
        selections={selections}
        updateSelections={updateSelections}
        hasGroupedCoreValues={hasGroupedCoreValues}
      />
      <ContinueButton
        selections={selections}
        shouldActivate={isContinueButtonEnabled}
        displayMiddleSection={displayMiddleSection}
      />
    </Container>
  );
};

export default TopSection;
