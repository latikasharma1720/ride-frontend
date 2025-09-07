import React from "react";

export default function Support() {
  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <h1>Help Center</h1>
      <div className="card" style={{ marginTop: 16 }}>
        <h3>Common Topics</h3>
        <ul>
          <li>How to book a ride</li>
          <li>How student pricing works</li>
          <li>Account verification with PFW email</li>
        </ul>

        <h3 style={{ marginTop: 16 }}>Need More Help?</h3>
        <p>
          Email <a href="mailto:support@mastoride.example">support@mastoride.example</a> or
          check our FAQ page for quick answers.
        </p>
      </div>
    </section>
  );
}
