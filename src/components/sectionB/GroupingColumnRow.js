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
  constructor(props) {
    super(props);
    this.state = { isTopFive: false };
  }

  coreValueText(coreValueId) {
    const coreValues = this.props.coreValues;
    const coreValue = coreValues.find(({ id }) => id === coreValueId);
    return coreValue.text;
  }

  handleClick(coreValueId) {
    if (this.props.updateTopFiveCoreValues) {
      this.props.updateTopFiveCoreValues(coreValueId);
    }
    this.setState({ isTopFive: !this.state.isTopFive });
  }

  render() {
    const isSelected = true;
    const coreValueId = this.props.coreValueId;
    return (
      <ColumnRow>
        <CoreValue
          key={this.props.key}
          index={this.props.index}
          coreValueId={coreValueId}
          selected={isSelected}
          text={this.coreValueText(coreValueId)}
          topFiveCoreValues={this.props.topFiveCoreValues}
          updateTopFiveCoreValues={this.props.updateTopFiveCoreValues}
          hasGroupedCoreValues={this.props.hasGroupedCoreValues}
        />
        <Selecter
          isTopFive={this.state.isTopFive} 
          onClick={() => this.handleClick(coreValueId)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Selecter>
      </ColumnRow>
    );
  }
}

export default GroupingColumnRow;
