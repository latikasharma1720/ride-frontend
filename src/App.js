import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

/** Layout */
import Layout from "./components/Layout.jsx";

/** Guest pages */
import Home from "./pages/guest/Home.jsx";
import About from "./pages/guest/About.jsx";
import Services from "./pages/guest/Services.jsx";
import Pricing from "./pages/guest/Pricing.jsx";
import FAQ from "./pages/guest/FAQ.jsx";
import Login from "./pages/guest/Login.jsx";
import Signup from "./pages/guest/Signup.jsx";

/** Student pages */
import ProfileSettings from "./pages/student/ProfileSettings.jsx";
import Support from "./pages/student/Support.jsx";

/** Admin pages */
import ReportsAnalytics from "./pages/admin/ReportsAnalytics.jsx";
import AdminSettings from "./pages/admin/AdminSettings.jsx";

/* ---------- simple role helpers ---------- */
const getRole = () => (localStorage.getItem("role") || "").toLowerCase();

function ProtectedRoute({ allow = [], children }) {
  const role = getRole();
  if (allow.length === 0) return children;
  return allow.includes(role) ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Guest routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Student routes */}
          <Route
            path="/student/profile"
            element={
              <ProtectedRoute allow={["student", "admin"]}>
                <ProfileSettings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student/support"
            element={
              <ProtectedRoute allow={["student", "admin"]}>
                <Support />
              </ProtectedRoute>
            }
          />

          {/* Admin routes */}
          <Route
            path="/admin/reports"
            element={
              <ProtectedRoute allow={["admin"]}>
                <ReportsAnalytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <ProtectedRoute allow={["admin"]}>
                <AdminSettings />
              </ProtectedRoute>
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}
