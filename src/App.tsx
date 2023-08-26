import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes" element={<Detail />} />
        </Routes>
    </Router>
  );
}

export default App;
