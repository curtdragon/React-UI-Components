import React from 'react';
import './App.css';
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="app">
      <section>
        <CalculatorDisplay/>
      </section>
      <section>
        <ActionButton text="clear" weight="light"/>
        <NumberButton text = "÷" ops="operation"/>
        <NumberButton text="7"/>
        <NumberButton text="8"/>
        <NumberButton text="9"/>
        <NumberButton text="×" ops="operation"/>
        <NumberButton text="4"/>
        <NumberButton text="5"/>
        <NumberButton text="6"/>
        <NumberButton text="−" ops="operation"/>
        <NumberButton text="1"/>
        <NumberButton text="2"/>
        <NumberButton text="3"/>
        <NumberButton text="+" ops="operation"/>
        <ActionButton text="0"/>
        <NumberButton text="=" ops="operation"/>
      </section>
    </div>
  );
};

export default App;
