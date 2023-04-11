import React from "react";
import PersonList from "./personlist";
import Person from "./person";
import "./App.css";

function App() {
  return (
    <>
     
      <div style={{ borderBottom: "5px solid black", padding: "10px" }}>
        <h2 style={{ textAlign: "center", color: "orange",  fontSize: "2rem"}}>Person</h2>
      <Person name="John" age={30} />
      <Person name="Mary" age={25} />
      <Person name="Alex" age={40} />
      <Person name="Sarah" age={22} />
      </div>
      <div>
        <PersonList />
      </div>
    </>
  );
}

export default App;
