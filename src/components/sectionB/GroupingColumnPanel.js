import React from 'react';
import styled from 'styled-components';
import GroupingColumn from './GroupingColumn';
import * as Constants from '../../constants';
import { HintTwo } from '../common/OnboardingHints';

const Container = styled.div`
  border: none;
  display: flex;
  flex-flow: row wrap;
`;

const GroupingColumnPanel = ({
  columns,
  coreValues,
  topFiveCoreValues,
  updateTopFiveCoreValues,
  hasGroupedCoreValues,
  ...props
}) => {
  let groupingColumns = [];
  for (let i = 1; i <= Constants.DEFAULT_NUMBER_COLUMNS; i++) {
    const columnId = `${Constants.GROUPING_COLUMN_PREFIX}${i}`;
    groupingColumns.push(
      <GroupingColumn
        columnId={columnId}
        key={columnId}
        coreValues={coreValues}
        columnValues={columns[columnId].coreValues}
        updateTopFiveCoreValues={updateTopFiveCoreValues}
        hasGroupedCoreValues={hasGroupedCoreValues}
        topFiveCoreValues={topFiveCoreValues}
      />
    );
  }

  return (
    <Container>
      <HintTwo />
      {groupingColumns}
    </Container>
  );
}

export default GroupingColumnPanel;
