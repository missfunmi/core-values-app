import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import CoreValue from '../common/CoreValue';
import * as Constants from '../../constants';
import { HintOne } from '../common/OnboardingHints';

const Wrapper = styled.div`
  margin-top: 20px;
`;

const Container = styled.div`
  border: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  pointer-events: ${props => (props.hasGroupedCoreValues ? 'none' : 'auto')};
`;

const CoreValueParent = styled.div`
  border: none;
  background-color: ${props => (props.hasGroupedCoreValues ? '#f9f9f9' : '#ffffff')};
  text-align: center;
  cursor: pointer;
  display: flex;
`;

const CoreValueWrapper = styled.div`
  display: ${props => (props.hasCompletedDrag ? 'none' : 'block')};
`;

const Placeholder = styled.div`
  text-align: center;
  padding: 3px 8px;
  margin: 3px 2px;
  color: #d3d3d3;
  background-color: #f9f9f9;
  border-radius: 20px;
  border: 1px dashed #d3d3d3;
  display: ${props => (props.hasStartedDrag || props.hasCompletedDrag ? 'block' : 'none')};
`;

const CoreValuePanel = ({
  coreValues,
  selections,
  hasGroupedCoreValues,
  updateSelections,
  ...props
}) => {
  const IS_DROP_ENABLED = false;
  const isSelected = (coreValueId) => {
    return selections.includes(coreValueId);
  }

  return (
    <Wrapper>
    <Container 
      hasGroupedCoreValues={hasGroupedCoreValues}
    >
      <HintOne />
      {coreValues.map((coreValue, index) => (
        <Droppable
          droppableId={`${Constants.CORE_VALUE_DROPPABLE_PREFIX}${coreValue.id}`}
          key={`${Constants.CORE_VALUE_DROPPABLE_PREFIX}${coreValue.id}`}
          isDropDisabled={!IS_DROP_ENABLED}
        >
          {(provided) => (
            <CoreValueParent
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <Placeholder
                hasStartedDrag={coreValue.hasStartedDrag}
                hasCompletedDrag={coreValue.hasCompletedDrag}
                hasCanceledDrag={coreValue.hasCanceledDrag}
              >
                {coreValue.text}
              </Placeholder>
              <CoreValueWrapper
                hasStartedDrag={coreValue.hasStartedDrag}
                hasCompletedDrag={coreValue.hasCompletedDrag}
                hasCanceledDrag={coreValue.hasCanceledDrag}
              >
                <CoreValue
                  index={index}
                  coreValueId={coreValue.id}
                  text={coreValue.text}
                  hasGroupedCoreValues={hasGroupedCoreValues}
                  selected={isSelected(coreValue.id)}
                  updateSelections={updateSelections}
                />
              </CoreValueWrapper>
              <div style={{ display: 'none' }}>
                {provided.placeholder}
              </div>
            </CoreValueParent>
          )}
        </Droppable>
      ))}
    </Container>
    </Wrapper>
  )
};

export default CoreValuePanel;
