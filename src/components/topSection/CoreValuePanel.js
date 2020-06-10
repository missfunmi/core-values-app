import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import CoreValue from './CoreValue';

const Container = styled.div`
  border: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 20px;
`;

const CoreValueParent = styled.div`
  border: none;
  background-color: #ffffff;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 10px;
  margin-right: 5px;
  cursor: pointer;
  display: flex;
`;

const CoreValueWrapper = styled.div`
  display: ${props => (props.hasCompletedDrag ? 'none' : 'block')};
`;

const Placeholder = styled.div`
  text-align: center;
  border-radius: 20px;
  padding: 6px 25px;
  margin: 0;
  color: #d3d3d3;
  background-color: #f9f9f9;
  border: 2px dashed #d3d3d3;
  display: ${props => (props.hasStartedDrag || props.hasCompletedDrag ? 'block' : 'none')};
`;

const DROPPABLE_ID_PREFIX = 'parent-';

class CoreValuePanel extends React.Component {
  isSelected(coreValue) {
    const selections = this.props.selections;
    return selections.includes(coreValue);
  }

  render() {
    const isDropDisabled = true;
    const coreValues = this.props.coreValues;

    // let groupingColumns = [];
    // for (let i=1; i <= DEFAULT_NUMBER_COLUMNS; i++) {
    //   const columnId = `${GROUPING_COLUMN_PREFIX}${i}`;
    //   groupingColumns.push(
    //     <GroupingColumn 
    //       columnId={columnId} 
    //       key={columnId}
    //       coreValues={this.props.coreValues} 
    //       columnValues={this.props.columns[columnId].coreValues}
    //     />
    //   );
    // }

    return (
      <Container>
        {coreValues.map((coreValue, index) => (
          <Droppable
            droppableId={`${DROPPABLE_ID_PREFIX}${coreValue.id}`}
            key={coreValue.id}
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
                    selected={this.isSelected(coreValue.text)}
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
