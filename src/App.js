import React from "react";
import { Route, Routes } from "react-router-dom";
import Accommodation from "./components/accommodations/Accommodation";
import { AdminContactMessages } from "./components/admin/AdminContactMessages";
import { AdminCreateAccommodation } from "./components/admin/AdminCreateAccommodation";
import { AdminEnquiries } from "./components/admin/AdminEnquiries";
import { AdminPage } from "./views/Admin/AdminPage";
import { ContactPage } from "./views/Contact/ContactPage";
import { HomePage } from "./views/Home/HomePage";
import Footer from "./components/layout/footer/Footer";
import Nav from "./components/layout/nav/Nav";
import { LoginPage } from "./views/Login/LoginPage";
import { SearchAccommodationPage } from "./views/Accommodations/SearchAccommodationPage";
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
          <Route path="/admin" element={<AdminPage />}>
            <Route path="messages" element={<AdminContactMessages />} />
            <Route path="enquiries" element={<AdminEnquiries />} />
            <Route path="create" element={<AdminCreateAccommodation />} />
          </Route>
          <Route path="/messages" element={<AdminPage />} />
          <Route path="accommodation/:id" element={<Accommodation />} />
          <Route path="search/accommodation/:id" element={<SearchAccommodationPage />} />
        </Routes>
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default App;
