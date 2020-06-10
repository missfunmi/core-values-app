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

const CORE_VALUE_PREFIX = 'coreValue-';
const GROUPING_COLUMN_PREFIX = 'grouping-column-';
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
      return {
        id: coreValueId,
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
      const columnId = `${GROUPING_COLUMN_PREFIX}${i}`;
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
    if (draggableId.startsWith(CORE_VALUE_PREFIX)) {
      let newCoreValues = Array.from(this.state.coreValues);
      newCoreValues = newCoreValues.map(coreValue => {
        return (coreValue.id === draggableId)
          ? {
            ...coreValue,
            hasStartedDrag: true,
            hasCompletedDrag: false,
            hasCanceledDrag: false
          } : coreValue
      });

      const newState = {
        ...this.state,
        coreValues: newCoreValues
      }
      this.setState(newState);
    }
  }

  onDragUpdate = (update, destination) => {

  }

  // TODO - Clean this up
  onDragEnd = (result) => {
    const { destination, source, draggableId, reason } = result;
    if (!destination || reason === 'CANCEL') {
      let newCoreValues = Array.from(this.state.coreValues);
      newCoreValues = newCoreValues.map(coreValue => {
        return (coreValue.id === draggableId)
          ? {
            ...coreValue,
            hasStartedDrag: false,
            hasCompletedDrag: false,
            hasCanceledDrag: true
          }
          : coreValue
      });
      const newState = {
        ...this.state,
        coreValues: newCoreValues
      }
      this.setState(newState);
      return;
    }

    if (destination.droppableId === source.droppableId
      && destination.index === source.index) {
      return;
    }

    let newState = { ...this.state }

    if (destination.droppableId.startsWith(GROUPING_COLUMN_PREFIX)) {
      let destinationColumn = this.state.groupingColumns[destination.droppableId];
      const destinationColumnCoreValues = Array.from(destinationColumn.coreValues);
      destinationColumnCoreValues.splice(destination.index, 0, draggableId);
      let newDestinationColumn = {
        ...destinationColumn,
        coreValues: destinationColumnCoreValues
      }

      let startColumn;
      let newStartColumn;
      if (source.droppableId.startsWith(GROUPING_COLUMN_PREFIX)) {
        startColumn = this.state.groupingColumns[source.droppableId];

        if (startColumn === destinationColumn) {
          const destinationColumnCoreValues = Array.from(destinationColumn.coreValues);
          destinationColumnCoreValues.splice(source.index, 1);
          destinationColumnCoreValues.splice(destination.index, 0, draggableId);
          newDestinationColumn = {
            ...destinationColumn,
            coreValues: destinationColumnCoreValues
          }
        } else {
          const startColumnCoreValues = Array.from(startColumn.coreValues);
          startColumnCoreValues.splice(source.index, 1);
          newStartColumn = {
            ...startColumn,
            coreValues: startColumnCoreValues
          }
        }

        let newCoreValues = Array.from(this.state.coreValues);
        newCoreValues = newCoreValues.map(coreValue => {
          return (coreValue.id === draggableId)
            ? {
              ...coreValue,
              hasStartedDrag: false,
              hasCompletedDrag: true,
              hasCanceledDrag: false
            }
            : coreValue
        });

        newState = {
          ...this.state,
          coreValues: newCoreValues,
          groupingColumns: {
            ...this.state.groupingColumns,
            [source.droppableId]: newStartColumn,
            [destination.droppableId]: newDestinationColumn
          }
        }

      } else {
        let newCoreValues = Array.from(this.state.coreValues);
        newCoreValues = newCoreValues.map(coreValue => {
          return (coreValue.id === draggableId)
            ? {
              ...coreValue,
              hasStartedDrag: false,
              hasCompletedDrag: true,
              hasCanceledDrag: false
            }
            : coreValue
        });

        newState = {
          ...this.state,
          coreValues: newCoreValues,
          groupingColumns: {
            ...this.state.groupingColumns,
            [destination.droppableId]: newDestinationColumn
          }
        }
      }

    } else {
      let newCoreValues = Array.from(this.state.coreValues);
      newCoreValues = newCoreValues.map(coreValue => {
        return (coreValue.id === draggableId)
          ? {
            ...coreValue,
            hasStartedDrag: false,
            hasCompletedDrag: false,
            hasCanceledDrag: true
          } : coreValue
      });
      newState = {
        ...this.state,
        coreValues: newCoreValues,
      }
    }

    this.setState(newState);
  };

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
