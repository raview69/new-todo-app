import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
