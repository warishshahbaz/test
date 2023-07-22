import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./pages/Footer";
import Layout from './components/Layout'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/About'
import Login from "./pages/Login";
import RegisterVerification from './pages/RegisterVerification'
import Register from './pages/Register'
import Dashboard from "./pages/Dashboard/Home";
import SuccessRegister from "./pages/SuccessRegister";

function App() {
  return (
    <>
      <BrowserRouter>


        <Routes>
          <Route path="/" exact element={<Layout />}></Route>
          <Route path="/home" exact element={<Layout />} />
          <Route path="/conatctus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/success" element={<SuccessRegister />} />
          <Route path="/verify" element={<RegisterVerification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
