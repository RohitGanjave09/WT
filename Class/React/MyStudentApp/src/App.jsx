import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import StudentInfo from "./StudentInfo";
import Counter from "./Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Component/About";
import Contact from "./Component/Coontact";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <StudentInfo fname="Tahir" age="21" course="AIML" />
      <Counter /> */}

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
