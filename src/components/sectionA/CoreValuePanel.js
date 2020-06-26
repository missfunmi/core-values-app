import React, { useState } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import CoreValue from '../common/CoreValue';
import * as Constants from '../../constants';
import { Hints } from 'intro.js-react';

const Container = styled.div`
  border: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const StepOneHint = styled.div.attrs(props => ({ className: 'stepOne' }))`
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
  const [hintsEnabled] = useState(true);
  const [hints] = useState([
    {
      element: ".stepOne",
      hint: "<strong>Start by selecting every word</strong> that resonates strongly as a core value. Don't overthink it. Give yourself no more than 5 minutes.",
      hintPosition: "middle-right"
    }
  ]);

  const IS_DROP_ENABLED = false;

  const isSelected = (coreValueId) => {
    return selections.includes(coreValueId);
  }

  return (
    <Container hasGroupedCoreValues={hasGroupedCoreValues}>
      <Hints
        enabled={hintsEnabled}
        hints={hints}
      />
      <StepOneHint/>
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
  )
};

export default CoreValuePanel;
