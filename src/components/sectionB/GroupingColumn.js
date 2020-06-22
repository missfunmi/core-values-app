import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import CoreValue from '../common/CoreValue';

const Column = styled.div`
  margin: 8px;
  padding: 5px;
  border: 2px solid #c9d3dd;
  border-radius: 10px;
  background-color: white;
  width: 200px;
  min-height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const InnerColumn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const ColumnRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Selecter = styled.div`
  color: #3d8af7;
  margin-left: 5px;
  font-size: 20px;
  margin-top: 3px;
  cursor: pointer;
`

class GroupingColumn extends React.Component {
  coreValueText(coreValueId) {
    const coreValues = this.props.coreValues;
    const coreValue = coreValues.find(({ id }) => id === coreValueId);
    return coreValue.text;
  }

  handleClick(coreValueId) {
    if (this.props.updateTopFiveCoreValues) {
      this.props.updateTopFiveCoreValues(coreValueId);
    }
    // TODO: Also - change text to red 'x', change background color of CoreValue to pink
  }

  render() {
    const columnId = this.props.columnId;
    const columnValues = this.props.columnValues ? this.props.columnValues : [];
    const isSelected = true;

    return (
      <Droppable droppableId={columnId} key={columnId}>
        {(provided, snapshot) => (
          <Column
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            <InnerColumn>
              {columnValues.map((columnValue, index) => (
                <ColumnRow>
                  <CoreValue
                    key={columnValue}
                    index={index}
                    coreValueId={columnValue}
                    text={this.coreValueText(columnValue)}
                    selected={isSelected}
                    updateTopFiveCoreValues={this.props.updateTopFiveCoreValues}
                  />
                  <Selecter
                    onClick={() => this.handleClick(columnValue)}
                  >+</Selecter>
                </ColumnRow>
              ))}
              {provided.placeholder}
            </InnerColumn>
          </Column>
        )}
      </Droppable>
    );
  }
}

export default GroupingColumn;
