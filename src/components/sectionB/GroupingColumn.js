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
  flex: 1;
`;

const InnerColumn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const GroupingColumn = ({
  columnId,
  columnValues,
  coreValues,
  topFiveCoreValues,
  updateTopFiveCoreValues,
  hasGroupedCoreValues,
  ...props
}) => {
  const columnCoreValues = columnValues ? columnValues : [];
  
  return (
    <Droppable droppableId={columnId} key={columnId}>
      {(provided, snapshot) => (
        <Column
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          {...provided.droppableProps}
        >
          <InnerColumn>
            {columnCoreValues.map((coreValueId, index) => (
              <GroupingColumnRow
                key={coreValueId}
                index={index}
                columnId={columnId}
                coreValueId={coreValueId}
                coreValues={coreValues}
                topFiveCoreValues={topFiveCoreValues}
                updateTopFiveCoreValues={updateTopFiveCoreValues}
                hasGroupedCoreValues={hasGroupedCoreValues}
              />
            ))}
            {provided.placeholder}
          </InnerColumn>
        </Column>
      )}
    </Droppable>
  );
};

export default GroupingColumn;
