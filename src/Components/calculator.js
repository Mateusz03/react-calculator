import "../Styles/calculator.css";
import { useState } from "react";
const operators = ["+", "-", "*", ":"];
const values_buttons = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "0",
  "C",
];
const side_buttons = ["AC", "="];

let displayValue = "";

const calculations = (value) => {
  switch (value) {
    case "C":
      displayValue = "";
      break;
    case "AC":
      displayValue = displayValue.slice(0, -1);
      break;
    default:
      displayValue += value;
      break;
  }
};

const Calculator = () => {
  const [output, setDisplay] = useState("");
  return (
    <section className="calculator">
      <div className="container">
        <div className="display">{output}</div>
        <div className="keypad">
          <div className="left-keypad">
            <div className="upper">
              {operators.map((operator) => {
                return (
                  <div
                    className="operators buttons"
                    onClick={(button) => {
                      calculations(button.target.innerText);
                      setDisplay(displayValue);
                    }}
                  >
                    {operator}
                  </div>
                );
              })}
            </div>
            <div className="lower">
              {values_buttons.map((values) => {
                return (
                  <div
                    className="values buttons"
                    onClick={(button) => {
                      calculations(button.target.innerText);
                      setDisplay(displayValue);
                    }}
                  >
                    {values}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right-keypad">
            {side_buttons.map((side) => {
              if (side === "=") {
                return (
                  <div
                    className="side buttons equal"
                    onClick={(button) => {
                      calculations(button.target.innerText);
                      setDisplay(displayValue);
                    }}
                  >
                    {side}
                  </div>
                );
              } else {
                return (
                  <div
                    className="side buttons"
                    onClick={(button) => {
                      calculations(button.target.innerText);
                      setDisplay(displayValue);
                    }}
                  >
                    {side}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
