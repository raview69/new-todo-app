import React from "react";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Pricing from "./components/pricing/Pricing";
import Auth from "./components/auth/Auth";
import Background from "./assets/background.svg";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-screen w-screen"
    >
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
