import React from 'react';
import styled from 'styled-components';
import GroupingColumn from './GroupingColumn';
import * as Constants from '../../constants';

const Container = styled.div`
  border: none;
  display: flex;
  flex-flow: row wrap;
`;

class GroupingColumnPanel extends React.Component {
  render() {
    let groupingColumns = [];
    for (let i=1; i <= Constants.DEFAULT_NUMBER_COLUMNS; i++) {
      const columnId = `${Constants.GROUPING_COLUMN_PREFIX}${i}`;
      groupingColumns.push(
        <GroupingColumn 
          columnId={columnId} 
          key={columnId}
          coreValues={this.props.coreValues} 
          columnValues={this.props.columns[columnId].coreValues}
          updateTopFiveCoreValues={this.props.updateTopFiveCoreValues}
          hasGroupedCoreValues={this.props.hasGroupedCoreValues}
          topFiveCoreValues={this.props.topFiveCoreValues}
        />
      );
    }

    return (
      <Container>
        {groupingColumns}
      </Container>
    );
  }
}

export default GroupingColumnPanel;
