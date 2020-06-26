import React, { useState } from 'react';
import styled from 'styled-components';
import { Hints } from 'intro.js-react';
import * as Constants from '../../constants';

export const OnboardingHints = ({
  hints,
  suppressHints,
  ...props
}) => {
  const [hintsEnabled] = useState(true);

  return (
    <div>
      <Hints
        enabled={hintsEnabled}
        hints={hints}
        onClose={suppressHints}
        options={{
          hintButtonLabel: Constants.DEFAULT_HINTS_BUTTON_LABEL,
          tooltipPosition: "left"
        }}
      />
    </div>
  );
}

export const HintOne = styled.div.attrs(props => ({ className: Constants.HINT_ONE }))`
`;

export const HintTwo = styled.div.attrs(props => ({ className: Constants.HINT_TWO }))`
  margin-left: 20px;
  margin-right: 5px;
`;

export const HintThree = styled.div.attrs(props => ({ className: Constants.HINT_THREE }))`
  margin-left: 20px;
  margin-right: 5px;
`;
