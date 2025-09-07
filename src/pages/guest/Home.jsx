import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="container hero">
        <h1 className="hero-title">Welcome to MastoRide</h1>
        <p className="hero-subtitle">
          Get affordable rides from campus to anywhere off-campus. Exclusively for students with a valid PFW Email.
        </p>

        <div className="hero-cta">
          <Link to="/signup" className="btn btn-lg btn-primary">Book a Ride</Link>
          <Link to="/services" className="btn btn-lg btn-outline">Learn More</Link>
        </div>
      </div>

      <div className="container features">
        <article className="card feature">
          <div className="feature-icon" aria-hidden="true">💲</div>
          <h3 className="feature-title">Student-Friendly Pricing</h3>
          <p className="feature-text">
            Affordable rates designed for student budgets. No surge pricing during peak campus hours.
          </p>
        </article>

        <article className="card feature">
          <div className="feature-icon" aria-hidden="true">🎓</div>
          <h3 className="feature-title">PFW Students Only</h3>
          <p className="feature-text">
            Exclusive service for verified PFW students with valid .edu emails. Safe and trusted community.
          </p>
        </article>

        <article className="card feature">
          <div className="feature-icon" aria-hidden="true">📍</div>
          <h3 className="feature-title">Off-Campus Destinations</h3>
          <p className="feature-text">
            Rides to shopping centers, restaurants, airports—wherever you need to go off-campus.
          </p>
        </article>
      </div>
    </section>
  );
}
