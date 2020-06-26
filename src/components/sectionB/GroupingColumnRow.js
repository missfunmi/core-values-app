import React from 'react';
import styled from 'styled-components';
import CoreValue from '../common/CoreValue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const ColumnRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Selecter = styled.div`
  color: ${props => (props.isTopFive ? '#e04b11' : '#3d8af7')};
  font-size: 1em;
  margin: 7px;
  cursor: pointer;
  transform: ${props => (props.isTopFive ? 'rotate(45deg)' : 'rotate(0)')};
  transition: all 0.3s linear;
`

class GroupingColumnRow extends React.Component {
  coreValueText(coreValueId) {
    const coreValues = this.props.coreValues;
    const coreValue = coreValues.find(({ id }) => id === coreValueId);
    return coreValue.text;
  }

  handleClick(columnId, coreValueId) {
    if (this.props.updateTopFiveCoreValues) {
      this.props.updateTopFiveCoreValues(columnId, coreValueId);
    }
  }

  render() {
    const isSelected = true;
    const coreValueId = this.props.coreValueId;
    const columnId = this.props.columnId;
    const topFiveCoreValues = this.props.topFiveCoreValues;
    const isTopFive = topFiveCoreValues && Object.values(topFiveCoreValues).includes(coreValueId);

    return (
      <ColumnRow>
        <CoreValue
          index={this.props.index}
          coreValueId={coreValueId}
          selected={isSelected}
          isTopFive={isTopFive}
          text={this.coreValueText(coreValueId)}
          hasGroupedCoreValues={this.props.hasGroupedCoreValues}
        />
        <Selecter
          isTopFive={isTopFive} 
          onClick={() => this.handleClick(columnId, coreValueId)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Selecter>
      </ColumnRow>
    );
  }
}

export default GroupingColumnRow;
