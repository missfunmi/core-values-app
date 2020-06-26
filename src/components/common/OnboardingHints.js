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
          tooltipClass: Constants.CUSTOM_HINTS_CLASS,
          tooltipPosition: 'auto',
          positionPrecedence: ['top', 'left', 'right', 'bottom']
        }}
      />
    </div>
  );
}

export const HintOne = styled.div.attrs({ 
  className: Constants.HINT_ONE,
  "data-position": "top"
})``;

export const HintTwo = styled.div.attrs({ 
  className: Constants.HINT_TWO,
  "data-position": "left"
})``;

export const HintThree = styled.div.attrs(props => ({ 
  className: Constants.HINT_THREE,
  "data-position": "right"
}))``;
