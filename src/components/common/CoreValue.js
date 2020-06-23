import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Bubble = styled.div`
  text-align: center;
  border-radius: 20px;
  padding: 3px 8px;
  margin: 3px 2px;
  cursor: ${props => (props.hasGroupedCoreValues ? 'default' : 'pointer')};
  display: block;
  color: 
    ${props => (props.selected ? '#ffffff' : props.hasGroupedCoreValues ? '#d3d3d3' : '#798da3')};
  background-color: 
    ${props => (props.isTopFive ? '#e04b11' : props.selected ? '#3d8af7' : props.hasGroupedCoreValues ? '#f9f9f9' : '#ffffff')};
  border: 
    ${props => (props.isTopFive ? '2px solid #e04b11' : props.selected ? '2px solid #3d8af7' : props.hasGroupedCoreValues ? '2px solid #d3d3d3' : '2px solid #c9d3dd')};
`;

class CoreValue extends React.Component {
  handleClick(coreValue) {
    if (this.props.updateSelections) {
      this.props.updateSelections(coreValue);
    }
  }

  render() {
    const coreValueId = this.props.coreValueId;
    const currentlySelected = this.props.selected;
    const hasGroupedCoreValues = this.props.hasGroupedCoreValues;
    const isDragDisabled = hasGroupedCoreValues || !currentlySelected;
    const topFiveCoreValues = this.props.topFiveCoreValues;
    const isTopFive = topFiveCoreValues && topFiveCoreValues.includes(coreValueId);

    return (
        <Draggable
          draggableId={coreValueId}
          key={coreValueId}
          index={this.props.index}
          isDragDisabled={isDragDisabled}
          hasGroupedCoreValues={hasGroupedCoreValues}
        >
          {(provided, snapshot) => (
            <Bubble
              onClick={() => this.handleClick(coreValueId)}
              selected={currentlySelected}
              hasGroupedCoreValues={hasGroupedCoreValues}
              isTopFive={isTopFive}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {this.props.text}
            </Bubble>
          )}
        </Draggable>
    )
  }
}

export default CoreValue;
