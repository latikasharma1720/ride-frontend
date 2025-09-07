import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

/** Guest pages */
import Home from "./pages/guest/Home";
import About from "./pages/guest/About";
import Services from "./pages/guest/Services";
import Pricing from "./pages/guest/Pricing";
import FAQ from "./pages/guest/FAQ";
import Login from "./pages/guest/Login";
import Signup from "./pages/guest/Signup";

/** Student pages (Latika) */
import ProfileSettings from "./pages/student/ProfileSettings";
import Support from "./pages/student/Support";

/** Admin pages (Latika) */
import ReportsAnalytics from "./pages/admin/ReportsAnalytics";
import AdminSettings from "./pages/admin/AdminSettings";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Guest */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Student */}
          <Route path="/student/profile" element={<ProfileSettings />} />
          <Route path="/student/support" element={<Support />} />

          {/* Admin */}
          <Route path="/admin/reports" element={<ReportsAnalytics />} />
          <Route path="/admin/settings" element={<AdminSettings />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
