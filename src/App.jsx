import React from "react";
import "./App.css";
import Home from "../src/pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import ScrollTop from "./components/ScrollTop";
import Signup from "./components/Auth/Signup";
import SignIn from "./components/Auth/SignIn";
import CookiePopup from "./Cookie/CookiePopup";
import Pricing from "./pages/Pricing";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import About from "./pages/About";

function App() {
  return (
    <>
      <ScrollTop />
      <CookiePopup />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
