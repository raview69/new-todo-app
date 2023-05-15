import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import TodoDetails from "./components/todo/TodoDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="quests/:id/edit" element={<TodoDetails />} />
      </Routes>
    </>
  );
}

export default App;
