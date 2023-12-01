import React, { useState } from 'react';
import './Styles.css';

const CalculatorApp = () => {
  const [currentOperand, setCurrentOperand] = useState('');
  const [previousOperand, setPreviousOperand] = useState('');

  const handleButtonClick = (value) => {
    switch (value) {
      case '=':
        calculateResult();
        break;
      case 'Clear':
        clearCalculator();
        break;
      default:
        appendToCurrentOperand(value);
        break;
    }
  };

  const appendToCurrentOperand = (value) => {
    setCurrentOperand((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(previousOperand + currentOperand);
      setPreviousOperand('');
      setCurrentOperand(result.toString());
    } catch (error) {
      setPreviousOperand('');
      setCurrentOperand('Error');
    }
  };

  const clearCalculator = () => {
    setCurrentOperand('');
    setPreviousOperand('');
  };

  return (
    <div className="calculator-app">
    <div className="wrapper">
	<svg>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
    Calculator
		</text>
	</svg>
</div>
      {/* <h1 className="title">Calculator</h1> */}
      <div className="output">
        <div className="previous-operand">{previousOperand}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
    
      <div className="calculator-grid">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, '.', '=', 'Clear'].map((button) => (
          <button key={button} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorApp;
