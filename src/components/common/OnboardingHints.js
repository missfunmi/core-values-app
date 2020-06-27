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
          positionPrecedence: ['right', 'top', 'bottom', 'left']
        }}
      />
    </div>
  );
}

export const HintOne = styled.div.attrs({ 
  className: Constants.HINT_ONE  
})`
  float: left;
  display: block;
  left: 40px;
  top: 100px;
  position: absolute;
`;

export const HintTwo = styled.div.attrs({ 
  className: Constants.HINT_TWO
})``;

export const HintThree = styled.div.attrs({ 
  className: Constants.HINT_THREE
})``;

export const HintFour = styled.div.attrs({ 
  className: Constants.HINT_FOUR
})`
  display: block;
`;
