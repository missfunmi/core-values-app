import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import GroupingColumnRow from './GroupingColumnRow';

const Column = styled.div`
  margin: 8px;
  padding: 5px;
  border: 1px solid #c9d3dd;
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

class GroupingColumn extends React.Component {
  render() {
    const columnId = this.props.columnId;
    const columnValues = this.props.columnValues ? this.props.columnValues : [];

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
                <GroupingColumnRow
                  key={columnValue}
                  index={index}
                  coreValueId={columnValue}
                  coreValues={this.props.coreValues}
                  topFiveCoreValues={this.props.topFiveCoreValues}
                  updateTopFiveCoreValues={this.props.updateTopFiveCoreValues}
                  hasGroupedCoreValues={this.props.hasGroupedCoreValues}
                />
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
