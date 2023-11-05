import React from "react";
import logo from "./Assets/logoPNG.png";
import Header from "./comopnents/Header/Header";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Package from "./Pages/Package";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Auth from "./Pages/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceDetail from "./comopnents/ServiceDetail/ServiceDetail";
import Error404 from "./Pages/Error404";
import Footer from "./comopnents/Footer/Footer";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Package" element={<Package />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/service_detail" element={<ServiceDetail />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Pages;
