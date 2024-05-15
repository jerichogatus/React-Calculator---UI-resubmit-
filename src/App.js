import React from 'react';
import './App.css';

function CalcButton({label, buttonClassName = "CalcButton"}) {
  return (
    <button className={buttonClassName}>
      {label}
    </button>
  );
}

function CalcDisplay({display}) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>
  );
}

export default function App() {

  const disp = 0;
  const num1 = null;
  const num2 = null;
  const op = null;

  return (
    <div className="App">
      <div className="CalcContainer">
        <CalcDisplay display={disp} />
        <div className="ButtonContainer">
          <CalcButton label={7} />
          <CalcButton label={8} />
          <CalcButton label={9} />
          <CalcButton label={"DIV"} />
          <CalcButton label={4} />
          <CalcButton label={5} />
          <CalcButton label={6} />
          <CalcButton label={"MUL"} />
          <CalcButton label={1} />
          <CalcButton label={2} />
          <CalcButton label={3} />
          <CalcButton label={"SUB"} />
          <CalcButton label={"CLR"} />
          <CalcButton label={0} />
          <CalcButton label={"EQ"} />
          <CalcButton label={"ADD"} />
        </div>
      </div>
    </div>
  );
}
