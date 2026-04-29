import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const showMessage = () => {
    alert("Button Clicked!");
  };

  return (
    <>
      <h1>Student Informatiom</h1>
      <button onClick={showMessage}>Click Me</button>
      <PropsEx name="Rohit" age="21" course="AIML" />
    </>
  );
}

function PropsEx({ name, age, course }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <p>Course: {course}</p>
    </div>
  );
}

export default App;
