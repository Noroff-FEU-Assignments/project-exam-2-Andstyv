import React from "react";
import { Route, Routes } from "react-router-dom";
import Accommodation from "./components/accommodations/Accommodation";
import { AccommodationsPage } from "./components/accommodations/AccommodationsPage";
import { AdminPage } from "./components/admin/AdminPage";
import { ContactPage } from "./components/contact/ContactPage";
import { HomePage } from "./components/home/HomePage";
import Nav from "./components/layout/Nav";
import { LoginPage } from "./components/login/LoginPage";
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
          <Route path="/accommodations" element={<AccommodationsPage />} />
          <Route path="accommodation/:id" element={<Accommodation />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
