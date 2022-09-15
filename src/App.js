import { useState } from "react";
import "./styles.css";

export default function App() {
  const [display, setDisplay] = useState("");

  function handleClick(e) {
    setDisplay(display.concat(e.target.name));
  }

  function calculateHandler() {
    setDisplay(eval(display).toString());
  }
  return (
    <div className="App">
      <h1>Basic Calculator</h1>
      <form>
        <input
          type="text"
          value={display}
          style={{
            display: "flex",
            alignItems: "right",
            width: "25rem",
            height: "3rem",
            textAlign: "right",
            fontSize: "2rem",
            marginBottom: "1rem",
            backgroundColor: "lightcoral",
            justifyContent: "center"
          }}
        ></input>
      </form>

      <div className="Calc-btn-area">
        <button
          className="calc-btn highlight"
          onClick={() => setDisplay("")}
          id="clear"
        >
          Clear
        </button>

        <button
          className="calc-btn highlight"
          onClick={() => setDisplay(display.slice(0, display.length - 1))}
        >
          C
        </button>

        <button className="calc-btn" name="1" onClick={handleClick}>
          1
        </button>
        <button className="calc-btn" name="2" onClick={handleClick}>
          2
        </button>
        <button className="calc-btn" name="3" onClick={handleClick}>
          3
        </button>
        <button className="calc-btn" name="4" onClick={handleClick}>
          4
        </button>
        <button className="calc-btn" name="5" onClick={handleClick}>
          5
        </button>
        <button className="calc-btn" name="6" onClick={handleClick}>
          6
        </button>
        <button className="calc-btn" name="7" onClick={handleClick}>
          7
        </button>
        <button className="calc-btn" name="8" onClick={handleClick}>
          8
        </button>
        <button className="calc-btn" name="9" onClick={handleClick}>
          9
        </button>
        <button className="calc-btn " name="0" onClick={handleClick}>
          0
        </button>
        <button className="calc-btn" name="." onClick={handleClick}>
          .
        </button>
        <button className="calc-btn highlight" name="+" onClick={handleClick}>
          +
        </button>
        <button className="calc-btn highlight" name="-" onClick={handleClick}>
          -
        </button>
        <button className="calc-btn highlight" name="*" onClick={handleClick}>
          *
        </button>
        <button className="calc-btn highlight" name="/" onClick={handleClick}>
          /
        </button>
        <button
          className="calc-btn highlight"
          onClick={calculateHandler}
          id="equal-btn"
        >
          =
        </button>
      </div>
    </div>
  );
}
