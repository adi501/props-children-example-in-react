import React from "react";
import "./styles.css";

import Person from "./Person/Person";

export default function App() {
  return (
    <div className="App">
      <Person name="adi" age="29" />
      <h1>Props children Example</h1>
      <Person name="pavan" age="27">
        <b>My Hobbies: Farming</b>
      </Person>
      <Person name="nani" age="30" />{" "}
    </div>
  );
}
