import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./components/contact/ContactPage";
import HomePage from "./components/home/HomePage";
import Nav from "./components/layout/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
