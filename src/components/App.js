import React from 'react';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import TopSection from './sectionA/TopSection';
import MiddleSection from './sectionB/MiddleSection';
import BottomSection from './sectionC/BottomSection';
import { OnboardingHints } from './common/OnboardingHints';
import { valuesData } from '../values-data';
import { hintsData } from '../hints';
import * as Constants from '../constants';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.suppressHints = this.suppressHints.bind(this);
    this.updateSelections = this.updateSelections.bind(this);
    this.displayMiddleSection = this.displayMiddleSection.bind(this);
    this.displayBottomSection = this.displayBottomSection.bind(this);
    this.updateTopFiveCoreValues = this.updateTopFiveCoreValues.bind(this);

    this.state = {
      hasSelectedCoreValues: false,
      hasGroupedCoreValues: false,
      selections: [],
      topFiveCoreValues: {},
      coreValues: this.initializeCoreValuesState(),
      groupingColumns: this.initializeGroupingColumnsState(),
      activeHints: [hintsData[Constants.HINT_ONE]]
    }
  }

  initializeCoreValuesState() {
    return valuesData.map((coreValue, index) => {
      const coreValueId = Constants.CORE_VALUE_PREFIX.concat(index);
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
    for (let i = 1; i <= Constants.DEFAULT_NUMBER_COLUMNS; i++) {
      const columnId = `${Constants.GROUPING_COLUMN_PREFIX}${i}`;
      groupingColumns = {
        ...groupingColumns,
        [columnId]: {
          coreValues: []
        }
      }
    }
    return groupingColumns;
  }

  suppressHints() {
    let activeHints = this.state.activeHints;
    if (activeHints.length) {
      activeHints.shift();
    }
    this.setState({ ...this.state, activeHints });
  }

  updateTopFiveCoreValues(columnId, coreValueId) {
    let topFiveCoreValues = this.state.topFiveCoreValues;
    if (topFiveCoreValues[columnId] === coreValueId) {
      delete topFiveCoreValues[columnId];
    } else {
      topFiveCoreValues[columnId] = coreValueId;
    }
    this.setState({ ...this.state, topFiveCoreValues });
  }

  updateSelections(selection) {
    const selections = Array.from(this.state.selections);
    if (selections.includes(selection)) {
      const indexToRemove = selections.indexOf(selection);
      selections.splice(indexToRemove, 1);
    } else {
      selections.push(selection);
      selections.sort();
    }
    this.setState({ ...this.state, selections });
  }

  displayMiddleSection() {
    if (this.state.hasSelectedCoreValues) {
      return;
    }
    this.setState({
      ...this.state,
      hasSelectedCoreValues: true,
      activeHints: [hintsData[Constants.HINT_TWO], hintsData[Constants.HINT_THREE]]
    });
  }

  displayBottomSection() {
    if (this.state.hasGroupedCoreValues) {
      return;
    }
    this.setState({
      ...this.state,
      hasGroupedCoreValues: true,
      activeHints: [hintsData[Constants.HINT_FOUR]]
    });
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
          id: (coreValue.id.startsWith(Constants.CORE_VALUE_PREFIX)
            ? Constants.CORE_VALUE_SWAPPED_PREFIX.concat(coreValue.positionInList)
            : Constants.CORE_VALUE_PREFIX.concat(coreValue.positionInList)),
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
    return droppableId.startsWith(Constants.GROUPING_COLUMN_PREFIX);
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
        onDragEnd={this.onDragEnd}
      >
        <Container>
          <OnboardingHints
            hints={this.state.activeHints}
            suppressHints={this.suppressHints}
          />
          <TopSection
            coreValues={this.state.coreValues}
            selections={this.state.selections}
            hasSelectedCoreValues={this.state.hasSelectedCoreValues}
            hasGroupedCoreValues={this.state.hasGroupedCoreValues}
            updateSelections={this.updateSelections}
            displayMiddleSection={this.displayMiddleSection}
          />
          <MiddleSection 
            coreValues={this.state.coreValues} 
            selections={this.state.selections}
            columns={this.state.groupingColumns}
            topFiveCoreValues={this.state.topFiveCoreValues}
            hasSelectedCoreValues={this.state.hasSelectedCoreValues}
            hasGroupedCoreValues={this.state.hasGroupedCoreValues}
            displayBottomSection={this.displayBottomSection}
            updateTopFiveCoreValues={this.updateTopFiveCoreValues}
          />
          <BottomSection
            coreValues={this.state.coreValues}
            topFiveCoreValues={this.state.topFiveCoreValues}
            hasGroupedCoreValues={this.state.hasGroupedCoreValues}
          />
        </Container>
      </DragDropContext>
    );
  }
}

export default App;
