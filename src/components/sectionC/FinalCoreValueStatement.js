import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';

const Section = styled.section`
  text-align: left;
  font-size: 14px;
  margin-top: 10px;
  margin-left: -5px;
`;

const Label = styled.div`
  color: ${props => (props.statement === '') ? '#798da3' : '#e04b11'};
  font-style: ${props => (props.statement === '') ? 'italic' : 'none'};
  padding: 5px;
  width: 90%;
  &:hover {
    border: 1px solid #3d8af7;
    border-radius: 2px;
  }
`;

const Statement = styled.input`
  color: #3b4754;
  font-family: 'open_sansregular', sans-serif;
  font-size: 14px;
  border: 1px solid #3d8af7;
  border-radius: 2px;
  padding: 5px;
  display: flex;
  width: 90%
`;

const PLACEHOLDER = 'Make this actionable...';

const FinalCoreValueStatement = () => {
  const inputRef = useRef();
  const [isEditing, setEditing] = useState(false);
  const [statement, setStatement] = useState('');

  useEffect(() => {
    if (inputRef && inputRef.current && isEditing === true) {
      inputRef.current.focus();
    }
  }, [isEditing, inputRef]);

  const handleKeyDown = (event) => {
    const { key } = event;
    const keys = ["Escape", "Tab"];
    const enterKey = "Enter";
    const allKeys = [...keys, enterKey];
    if (allKeys.indexOf(key) > -1) {
      setEditing(false);
    }
  };

  const text = (statement && statement.length) ? statement : PLACEHOLDER;

  return (
    <Section>
      {isEditing ? (
        <Statement 
          ref={inputRef}
          type="text"
          value={statement}
          placeholder={PLACEHOLDER}
          onChange={e => setStatement(e.target.value)}
          onBlur={() => setEditing(false)}
          onKeyDown={e => handleKeyDown(e)}
        />
      ) : (
        <Label
          onClick={() => setEditing(true)}
          statement={statement}
        >
          {text}
        </Label>
      )}
    </Section>
  );
};

export default FinalCoreValueStatement;
