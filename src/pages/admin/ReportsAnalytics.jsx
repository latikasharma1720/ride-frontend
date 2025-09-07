import React from "react";

const Stat = ({ label, value }) => (
  <div className="card" style={{ padding: 16 }}>
    <div style={{ fontSize: 12, color: "#5b6a72" }}>{label}</div>
    <div style={{ fontSize: 24, fontWeight: 700 }}>{value}</div>
  </div>
);

export default function ReportsAnalytics() {
  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <h1>Reports & Analytics</h1>
      <div
        style={{
          marginTop: 16,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
        }}
      >
        <Stat label="Total Rides (30d)" value="512" />
        <Stat label="Avg. Ride Fare" value="$8.40" />
        <Stat label="Active Drivers" value="34" />
        <Stat label="New Students (7d)" value="71" />
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h3>Recent Activity (demo)</h3>
        <ul>
          <li>Peak usage: 5–7 PM weekdays</li>
          <li>Top destination: Campus Village</li>
          <li>Refund rate: 0.8%</li>
        </ul>
      </div>
    </section>
  );
}
