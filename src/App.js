import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminPage from "./components/admin/AdminPage";
import ContactPage from "./components/contact/ContactPage";
import HomePage from "./components/home/HomePage";
import Nav from "./components/layout/Nav";
import LoginPage from "./components/login/LoginPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Nav />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
