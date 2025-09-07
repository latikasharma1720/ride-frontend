import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

// Guest pages (standalone)
import Home from "./pages/guest/Home";
import About from "./pages/guest/About";
import Services from "./pages/guest/Services";   // ✅ keep
import Pricing from "./pages/guest/Pricing";
import FAQ from "./pages/guest/FAQ";
import Login from "./pages/guest/Login";
import Signup from "./pages/guest/Signup";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />   {/* ✅ services route */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
