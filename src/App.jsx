import * as React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import User from "./components/User";
import Beer from "./components/Beer";

function App() {
  return (
    <div className="App">
      <h1>Cool Stuff of the Day</h1>
      <User />
      <Beer />
    </div>
  );
}

export default App;
