import "./App.css";
import React, { useReducer } from "react";

function App() {
  const initialState = { value: 0, evaluation: "" };

  function calculateStr(userInput) {
    return new Function("return " + userInput)();
  }

  function stateReducer(state, action) {
    switch (action.type) {
      case "0":
        return { ...state, evaluation: `${state.evaluation}0` };
      case "1":
        return { ...state, evaluation: `${state.evaluation}1` };
      case "2":
        return { ...state, evaluation: `${state.evaluation}2` };
      case "3":
        return { ...state, evaluation: `${state.evaluation}3` };
      case "4":
        return { ...state, evaluation: `${state.evaluation}4` };
      case "5":
        return { ...state, evaluation: `${state.evaluation}5` };
      case "6":
        return { ...state, evaluation: `${state.evaluation}6` };
      case "7":
        return { ...state, evaluation: `${state.evaluation}7` };
      case "8":
        return { ...state, evaluation: `${state.evaluation}8` };
      case "9":
        return { ...state, evaluation: `${state.evaluation}9` };
      case "+":
        return { ...state, evaluation: `${state.evaluation}+` };
      case "-":
        return { ...state, evaluation: `${state.evaluation}-` };
      case "*":
        return { ...state, evaluation: `${state.evaluation}*` };
      case "/":
        return { ...state, evaluation: `${state.evaluation}/` };
      case "C":
        return { ...state, evaluation: `` };
      case "=":
        return {
          ...state,
          evaluation: calculateStr(state.evaluation),
        };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const buttonsArr = [
    "0",
    ".",
    "+",
    "=",
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "/",
    "C",
  ];
  return (
    <div className="App">
      <div className="App-header">
        <p>Calculator</p>
        <div className="Calculator-styles">
          {buttonsArr.map((symbol, index) => {
            return (
              <button
                onClick={() => dispatch({ type: symbol })}
                className="button"
                type="button"
              >
                {symbol}
              </button>
            );
          })}
          <input type="text" name="resultTab" value={state.evaluation} />
        </div>
      </div>
    </div>
  );
}

export default App;
