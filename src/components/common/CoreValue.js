import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Bubble = styled.div`
  text-align: center;
  border-radius: 20px;
  padding: 6px 18px;
  margin: 5px 2px;
  cursor: pointer;
  display: block;
  color: ${props => (props.selected ? '#ffffff' : '#798da3')};
  background-color: ${props => (props.selected ? '#3d8af7' : '#ffffff')};
  border: ${props => (props.selected ? '2px solid #3d8af7' : '2px solid #c9d3dd')};
`;

class CoreValue extends React.Component {
  handleClick(coreValue) {
    if (this.props.updateSelections) {
      this.props.updateSelections(coreValue);
    }
  }

  render() {
    const currentlySelected = this.props.selected;
    const isDragDisabled = !currentlySelected;

    return (
        <Draggable
          draggableId={this.props.coreValueId}
          key={this.props.coreValueId}
          index={this.props.index}
          isDragDisabled={isDragDisabled}
        >
          {(provided, snapshot) => (
            <Bubble
              // onClick={() => this.handleClick(this.props.text)}
              onClick={() => this.handleClick(this.props.coreValueId)}
              selected={currentlySelected}
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
