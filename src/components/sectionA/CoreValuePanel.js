import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import CoreValue from '../common/CoreValue';

const Container = styled.div`
  border: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
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

const CORE_VALUE_DROPPABLE_PREFIX = 'parent-';

class CoreValuePanel extends React.Component {
  isSelected(coreValue) {
    const selections = this.props.selections;
    return selections.includes(coreValue);
  }

  render() {
    const isDropDisabled = true;
    const coreValues = this.props.coreValues;
    const hasGroupedCoreValues = this.props.hasGroupedCoreValues;

    return (
      <Container
        hasGroupedCoreValues={hasGroupedCoreValues}
      >
        {coreValues.map((coreValue, index) => (
          <Droppable
            droppableId={`${CORE_VALUE_DROPPABLE_PREFIX}${coreValue.id}`}
            key={`${CORE_VALUE_DROPPABLE_PREFIX}${coreValue.id}`}
            isDropDisabled={isDropDisabled}
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
                    selected={this.isSelected(coreValue.id)}
                    updateSelections={this.props.updateSelections}
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
  }
}

export default CoreValuePanel;
