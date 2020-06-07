import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import CoreValue from '../topSection/CoreValue';

const Container = styled.div`
  margin: 8px;
  border: 2px solid #c9d3dd;
  border-radius: 10px;
  background-color: white;
  width: 210px;
  min-height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InnerColumn = styled.div`
  padding: 15px 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const CoreValueWrapper = styled.div`
  margin: 5px 2px;
`;

class GroupingColumn extends React.Component {
  coreValueText(coreValueId) {
    const coreValues = this.props.coreValues;
    const coreValue = coreValues.find(({ id }) => id === coreValueId);
    return coreValue.text;
  }

  render() {
    const columnId = this.props.columnId;
    const columnValues = this.props.columnValues ? this.props.columnValues : [];
    const isSelected = true;
    return (
      <Droppable droppableId={columnId} key={columnId}>
        {(provided) => (
          <Container
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <InnerColumn>
              {columnValues.map((columnValue, index) => (
                <CoreValueWrapper key={index}>
                  <CoreValue
                    index={index}
                    coreValueId={columnValue}
                    text={this.coreValueText(columnValue)}
                    selected={isSelected}
                  />
                </CoreValueWrapper>
              ))}
              {provided.placeholder}
            </InnerColumn>
          </Container>
        )}
      </Droppable>
    );
  }
}

export default GroupingColumn;
