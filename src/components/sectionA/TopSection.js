import React from 'react';
import styled from 'styled-components';
import CoreValuePanel from './CoreValuePanel';
import ContinueButton from './ContinueButton';

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
    <Container 
      hasGroupedCoreValues={hasGroupedCoreValues}
    >
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
