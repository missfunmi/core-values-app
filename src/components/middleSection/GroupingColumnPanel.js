import React from 'react';
import styled from 'styled-components';
import GroupingColumn from './GroupingColumn';

const Container = styled.div `
  border: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding-bottom: 20px;
`;

const DEFAULT_NUMBER_COLUMNS = 5;
const GROUPING_COLUMN_PREFIX = 'grouping-column-';

class GroupingColumnPanel extends React.Component {
  render() {
    let groupingColumns = [];
    for (let i=1; i <= DEFAULT_NUMBER_COLUMNS; i++) {
      const columnId = `${GROUPING_COLUMN_PREFIX}${i}`;
      groupingColumns.push(
        <GroupingColumn 
          columnId={columnId} 
          key={columnId}
          coreValues={this.props.coreValues} 
          columnValues={this.props.columns[columnId].coreValues}
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
