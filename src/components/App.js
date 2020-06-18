import React from 'react';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import TopSection from './topSection/TopSection';
import MiddleSection from './middleSection/MiddleSection';
import BottomSection from './bottomSection/BottomSection';
import valuesData from '../values-data';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 99%;
  font-family: 'Optima';
`;

const CORE_VALUE_DROPPABLE_PREFIX = 'parent-';
const CORE_VALUE_PREFIX = 'coreValue-';
const CORE_VALUE_SWAPPED_PREFIX = 'swapped-coreValue-';
const GROUPING_COLUMN_DROPPABLE_PREFIX = 'grouping-column-';
const DEFAULT_NUMBER_COLUMNS = 5;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTopPanelDoneSelecting: false,
      coreValues: this.initializeCoreValuesState(),
      groupingColumns: this.initializeGroupingColumnsState()
    }
  }

  initializeCoreValuesState() {
    return valuesData.map((coreValue, index) => {
      const coreValueId = CORE_VALUE_PREFIX.concat(index);
      // TODO - Fix this
      const swappedId = CORE_VALUE_SWAPPED_PREFIX.concat(index);
      return {
        id: coreValueId,
        swappedId: swappedId,
        positionInList: index,
        text: coreValue,
        hasStartedDrag: false,
        hasCompletedDrag: false,
        hasCanceledDrag: false
      }
    });
  }

  initializeGroupingColumnsState() {
    let groupingColumns = {};
    for (let i = 1; i <= DEFAULT_NUMBER_COLUMNS; i++) {
      const columnId = `${GROUPING_COLUMN_DROPPABLE_PREFIX}${i}`;
      groupingColumns = {
        ...groupingColumns,
        [columnId]: {
          coreValues: []
        }
      }
    }
    return groupingColumns;
  }

  onBeforeDragStart = (start) => {
    const { draggableId } = start;
    if (draggableId.startsWith(CORE_VALUE_PREFIX) || draggableId.startsWith(CORE_VALUE_SWAPPED_PREFIX)) {
      const newCoreValues = this.updateCoreValuesState(draggableId, true, false, false);
      const newState = { ...this.state, coreValues: newCoreValues }
      this.setState(newState);
    }
  }

  onDragUpdate = (update, destination) => {}

  // TODO - Clean this up
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    console.log(`result is: ${JSON.stringify(result)}`);

    if (destination 
      && destination.droppableId === source.droppableId
      && destination.index === source.index
      && source.droppableId.startsWith(GROUPING_COLUMN_DROPPABLE_PREFIX)) {
      // Condition 2b, i.e. source = destination = column & index unchanged
      const newCoreValues = this.updateCoreValuesState(draggableId, false, true, false);
      const newState = { ...this.state, coreValues: newCoreValues }
      this.setState(newState);
      return;
    }

    if (!destination 
        && source.droppableId.startsWith(GROUPING_COLUMN_DROPPABLE_PREFIX)) {
      // Condition 1b, i.e. no destination and source = column
      let startColumn = this.state.groupingColumns[source.droppableId];
      let startColumnCoreValues = Array.from(startColumn.coreValues);
      startColumnCoreValues.splice(source.index, 1);

      // Q: Why swap Ids when dropping back into the main panel? 
      // A: Because of how mounting & diffing works in React. 
      // See https://stackoverflow.com/a/35793185 and https://stackoverflow.com/a/48451229
      const newCoreValues = Array.from(this.state.coreValues, coreValue => {
        return (coreValue.id === draggableId)
          ? {
            ...coreValue,
            id: (coreValue.id.startsWith(CORE_VALUE_PREFIX) 
                ? CORE_VALUE_SWAPPED_PREFIX.concat(coreValue.positionInList) 
                : CORE_VALUE_PREFIX.concat(coreValue.positionInList)),
            hasStartedDrag: false,
            hasCompletedDrag: false,
            hasCanceledDrag: false
          }
          : coreValue
      });
      
      const newState = {
        ...this.state,
        coreValues: newCoreValues,
        groupingColumns: {
          ...this.state.groupingColumns,
          [source.droppableId]: { ...startColumn, coreValues: startColumnCoreValues },
        }
      }

      this.setState(newState);
      return;
    }

    if (!destination
        || (destination 
          && destination.droppableId === source.droppableId
          && destination.index === source.index
          && source.droppableId.startsWith(CORE_VALUE_DROPPABLE_PREFIX))
    ) {
      // Condition 1a, i.e. no destination and source = coreValuePanel
      // Condition 2a, i.e. source = destination = coreValuePanel & index unchanged
      const newCoreValues = this.updateCoreValuesState(draggableId, false, false, true);
      const newState = { ...this.state, coreValues: newCoreValues }
      this.setState(newState);
      return;
    }

    if (destination.droppableId.startsWith(GROUPING_COLUMN_DROPPABLE_PREFIX)) {
      // Condition 3, i.e. master logic
      const startColumn = this.state.groupingColumns[source.droppableId];
      const finishColumn = this.state.groupingColumns[destination.droppableId];
      
      let startColumnCoreValues = startColumn ? Array.from(startColumn.coreValues) : [];
      let finishColumnCoreValues = Array.from(finishColumn.coreValues);
      
      (startColumn === finishColumn) 
        ? finishColumnCoreValues.splice(source.index, 1) // drag within same column, remove element from finish column
        : startColumnCoreValues.splice(source.index, 1); // drag to new column, remove element from start column 
      finishColumnCoreValues.splice(destination.index, 0, draggableId); // insert element into finish column between position index-1 and index+1
      
      const newState = {
        ...this.state,
        coreValues: this.updateCoreValuesState(draggableId, false, true, false),
        groupingColumns: {
          ...this.state.groupingColumns,
          ...(startColumn && { [source.droppableId]: { ...startColumn, coreValues: startColumnCoreValues } }),
          [destination.droppableId]: { ...finishColumn, coreValues: finishColumnCoreValues }
        }
      }

      this.setState(newState);
    }
  };

  updateCoreValuesState(coreValueId, hasStartedDrag, hasCompletedDrag, hasCanceledDrag) {
    return Array.from(this.state.coreValues, coreValue => {
      return (coreValue.id === coreValueId)
        ? { ...coreValue, hasStartedDrag, hasCompletedDrag, hasCanceledDrag }
        : coreValue;
    });
  }

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
        onBeforeDragStart={this.onBeforeDragStart}
      >
        <Container>
          <TopSection
            coreValues={this.state.coreValues}
            isDoneSelecting={this.state.isTopPanelDoneSelecting}
          />
          <MiddleSection coreValues={this.state.coreValues} columns={this.state.groupingColumns} />
          <BottomSection />
        </Container>
      </DragDropContext>
    );
  }
}

export default App;
