import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div``;

const Button = styled.div`
  text-align: center;
  border-radius: 20px;
  padding: 6px 25px;
  margin: 0;
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

  draggableId(index) {
    const draggableId = 'core-value-parent-'.concat(index);
    return draggableId;
  };

  render() {
    const currentlySelected = this.props.selected;
    const isDragDisabled = !currentlySelected;

    return (
      <Container>
        <Draggable
          draggableId={this.props.coreValueId}
          index={this.props.index}
          isDragDisabled={isDragDisabled}
        >
          {(provided, snapshot) => (
            <Button
              onClick={() => this.handleClick(this.props.text)}
              selected={currentlySelected}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {this.props.text}
            </Button>
          )}
        </Draggable>
      </Container>
    )
  }
}

export default CoreValue;
