import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import TodoDetails from "./components/todo/TodoDetails";
import { ModalProvider } from "./components/modal/ModalContext";

function App() {
  return (
    <ModalProvider>
      <div className="bg-[#F4F4F4]">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="quests/:id/edit" element={<TodoDetails />} />
        </Routes>
      </div>
    </ModalProvider>
  );
}

export default App;
