import React, { useState } from 'react';
import './App.css';

function CalcButton({ label, onClick }) {
  return (
    <button className="CalcButton" onClick={onClick}>
      {label}
    </button>
  );
}

function CalcDisplay({ display }) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>
  );
}

export default function App() {
  const [disp, setDisp] = useState('0');
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [op, setOp] = useState(null);

  const clrClickHandler = () => {
    setDisp('0');
    setNum1(null);
    setNum2(null);
    setOp(null);
  }

  const equalClickHandler = () => {
    let result = null;
  
    if (num1 !== null && num2 !== null && op !== null) {
      if (op === 'ADD') {
        result = parseInt(num1) + parseInt(num2);
      } else if (op === 'SUB') {
        result = parseInt(num1) - parseInt(num2);
      } else if (op === 'MUL') {
        result = parseInt(num1) * parseInt(num2);
      } else if (op === 'DIV') {
        result = parseInt(num1) / parseInt(num2);
      }
  
      setDisp(result.toString());
      setNum1(result.toString());
      setNum2(null);
      setOp(null);
    }
  }
  

  const numberClickHandler = (e) => {
    const value = e.target.innerHTML;

    if (disp === '0' && value === '0') {
      // Don't do anything
    } else if (op === null) {
      if (num1 === null) {
        setNum1(value);
        setDisp(value);
      } else {
        setNum1(num1 + value);
        setDisp(num1 + value);
      }
    } else {
      if (num2 === null) {
        setNum2(value);
        setDisp(value);
      } else {
        setNum2(num2 + value);
        setDisp(num2 + value);
      }
    }
  }

  const opClickHandler = (e) => {
    const value = e.target.innerHTML;
    setOp(value);
    setDisp(value);
  }

  return (
    <div className="App">
      <div className="CalcContainer">
        <CalcDisplay display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={7} onClick={numberClickHandler} />
          <CalcButton label={8} onClick={numberClickHandler} />
          <CalcButton label={9} onClick={numberClickHandler} />
          <CalcButton label="DIV" onClick={opClickHandler} />
          <CalcButton label={4} onClick={numberClickHandler} />
          <CalcButton label={5} onClick={numberClickHandler} />
          <CalcButton label={6} onClick={numberClickHandler} />
          <CalcButton label="MUL" onClick={opClickHandler} />
          <CalcButton label={1} onClick={numberClickHandler} />
          <CalcButton label={2} onClick={numberClickHandler} />
          <CalcButton label={3} onClick={numberClickHandler} />
          <CalcButton label="SUB" onClick={opClickHandler} />
          <CalcButton label="CLR" onClick={clrClickHandler} />
          <CalcButton label={0} onClick={numberClickHandler} />
          <CalcButton label="EQ" onClick={equalClickHandler} />
          <CalcButton label="ADD" onClick={opClickHandler} />
        </div>
      </div>
    </div>
  );
}
