import React from 'react';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import TopSection from './sectionA/TopSection';
import MiddleSection from './sectionB/MiddleSection';
import BottomSection from './sectionC/BottomSection';
import valuesData from '../values-data';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 99%;
  font-family: 'Optima';
`;

const CORE_VALUE_PREFIX = 'coreValue-';
const CORE_VALUE_SWAPPED_PREFIX = 'swapped-coreValue-';
const GROUPING_COLUMN_DROPPABLE_PREFIX = 'grouping-column-';
const DEFAULT_NUMBER_COLUMNS = 5;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateSelections = this.updateSelections.bind(this);
    this.state = {
      selections: [],
      coreValues: this.initializeCoreValuesState(),
      groupingColumns: this.initializeGroupingColumnsState()
    }
  }

  initializeCoreValuesState() {
    return valuesData.map((coreValue, index) => {
      const coreValueId = CORE_VALUE_PREFIX.concat(index);
      return {
        id: coreValueId,
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

  updateSelections(selection) {
    // TODO update logic to use splice
    const updatedSelections = Array.from(this.state.selections);
    if (updatedSelections.includes(selection)) {
      const indexToRemove = updatedSelections.indexOf(selection);
      updatedSelections.splice(indexToRemove, 1);
    } else {
      updatedSelections.push(selection);
      updatedSelections.sort();
    }
    const newState = {
      ...this.state,
      selections: updatedSelections
    }
    this.setState(newState);
  }

  updateCoreValue(coreValueId, hasStartedDrag, hasCompletedDrag, hasCanceledDrag) {
    return Array.from(this.state.coreValues, coreValue => {
      return (coreValue.id === coreValueId)
        ? { ...coreValue, hasStartedDrag, hasCompletedDrag, hasCanceledDrag }
        : coreValue;
    });
  }

  resetCoreValue(coreValueId) {
    // Q: Why swap Ids when dropping back into the main panel? 
    // A: Because of how mounting & diffing works in React. 
    // See https://stackoverflow.com/a/35793185 and https://stackoverflow.com/a/48451229
    return Array.from(this.state.coreValues, coreValue => {
      return (coreValue.id === coreValueId)
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
  }

  isDroppedToSamePosition(destination, source) {
    return destination
      && destination.droppableId === source.droppableId
      && destination.index === source.index;
  }

  isGroupingColumn(droppableId) {
    return droppableId.startsWith(GROUPING_COLUMN_DROPPABLE_PREFIX);
  }

  updateStateForCanceledSourceDrop(source, draggableId) {
    if (!this.isGroupingColumn(source.droppableId)) {
      const newCoreValues = this.updateCoreValue(draggableId, false, false, true);
      const newState = { ...this.state, coreValues: newCoreValues }
      return newState;
    }

    let updatedSelections = Array.from(this.state.selections);
    if (updatedSelections.includes(draggableId)) {
      const indexToRemove = updatedSelections.indexOf(draggableId);
      updatedSelections.splice(indexToRemove, 1);
    } 
    
    let startColumn = this.state.groupingColumns[source.droppableId];
    let startColumnCoreValues = Array.from(startColumn.coreValues);
    startColumnCoreValues.splice(source.index, 1);
    
    const newState = {
      ...this.state,
      selections: updatedSelections,
      coreValues: this.resetCoreValue(draggableId),
      groupingColumns: {
        ...this.state.groupingColumns,
        [source.droppableId]: { ...startColumn, coreValues: startColumnCoreValues },
      }
    }

    return newState;
  }

  updateStateForNoopDestinationDrop(destination, draggableId) {
    const newCoreValues = 
      this.isGroupingColumn(destination.droppableId)
        ? this.updateCoreValue(draggableId, false, true, false)
        : this.updateCoreValue(draggableId, false, false, true);
    const newState = { ...this.state, coreValues: newCoreValues }
    return newState;
  }

  onBeforeDragStart = (start) => {
    const { draggableId } = start;
    const newCoreValues = this.updateCoreValue(draggableId, true, false, false);
    const newState = { ...this.state, coreValues: newCoreValues }
    this.setState(newState);
  }

  onDragUpdate = (update) => { 
    const { destination, source, draggableId } = update;
    // console.log(`draggableId is: ${draggableId}\nsource is:\n${JSON.stringify(source, null, 2)},\ndestination is:\n${JSON.stringify(destination, null, 2)}`);
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      this.setState(this.updateStateForCanceledSourceDrop(source, draggableId));
      return;
    }

    if (this.isDroppedToSamePosition(destination, source)) {
      this.setState(this.updateStateForNoopDestinationDrop(destination, draggableId));
      return;
    }

    if (!this.isGroupingColumn(destination.droppableId)) {
      console.log(`WARNING: unsupported droppable destination: ${JSON.stringify(destination)}`);
      return;
    }

    const startColumn = this.state.groupingColumns[source.droppableId];
    const finishColumn = this.state.groupingColumns[destination.droppableId];

    let finishColumnCoreValues = Array.from(finishColumn.coreValues);
    let startColumnCoreValues = 
      (startColumn === finishColumn) ? finishColumnCoreValues
        : startColumn ? Array.from(startColumn.coreValues)
        : [];

    startColumnCoreValues.splice(source.index, 1);
    finishColumnCoreValues.splice(destination.index, 0, draggableId);

    const newState = {
      ...this.state,
      coreValues: this.updateCoreValue(draggableId, false, true, false),
      groupingColumns: {
        ...this.state.groupingColumns,
        ...((startColumn && startColumn !== finishColumn) && { [source.droppableId]: { ...startColumn, coreValues: startColumnCoreValues } }),
        [destination.droppableId]: { ...finishColumn, coreValues: finishColumnCoreValues }
      }
    }

    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext
        onBeforeDragStart={this.onBeforeDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <Container>
          <TopSection
            coreValues={this.state.coreValues}
            selections={this.state.selections}
            updateSelections={this.updateSelections}
          />
          <MiddleSection 
            selections={this.state.selections}
            coreValues={this.state.coreValues} 
            columns={this.state.groupingColumns}
          />
          <BottomSection />
        </Container>
      </DragDropContext>
    );
  }
}

export default App;
