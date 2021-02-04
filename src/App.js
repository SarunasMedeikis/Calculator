import logo from "./logo.svg";
import "./App.css";

function App() {
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
  let track;
  return (
    <div className="App">
      <div className="App-header">
        <p>Calculator</p>
        <div className="Calculator-styles">
          {buttonsArr.map((symbol, index) => {
            console.log(index);
            return (
              <button className="button" type="button">
                {symbol}
              </button>
            );
          })}
          <input type="text" id="lname" name="lname" value="0" />
        </div>
      </div>
    </div>
  );
}

export default App;
