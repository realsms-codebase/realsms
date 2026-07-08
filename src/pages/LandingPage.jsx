import {
  FiArrowRight,
  FiChevronDown,
  FiGlobe,
  FiMessageSquare,
} from "react-icons/fi";
import "../styles/landing.css";
import hero from "../assets/hero-dashboard.png";

export default function LandingPage() {
  return (
    <div className="landing">

      {/* NAVBAR */}

      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">💬</div>
          <span>realsms</span>
        </div>

        <ul className="nav-links">
          <li>
            Products
            <FiChevronDown />
          </li>

          <li>API</li>

          <li>Docs</li>

          <li>Blog</li>

          <li>Support</li>
        </ul>

        <div className="nav-buttons">
          <button className="login-btn">
            Log in
          </button>

          <button className="signup-btn">
            Sign up
          </button>
        </div>
      </nav>

      {/* HERO */}

      <section className="hero">

        <div className="hero-left">

          <div className="hero-badge">
            Virtual numbers & social media logs
          </div>

          <h1>
            Virtual numbers and
            <br />
            social media logs
            <br />
            <span>you can trust.</span>
          </h1>

          <p>
            Get virtual phone numbers from 100+
            countries and access real SMS &
            social media logs instantly.
            Built for privacy, speed and
            reliability.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Get virtual number
              <FiArrowRight />
            </button>

            <button className="secondary-btn">
              Browse social media logs
              <FiArrowRight />
            </button>

          </div>

          <div className="hero-stats">

            <div className="stat">

              <div className="icon">
                <FiGlobe />
              </div>

              <div>
                <h3>100+</h3>
                <p>Countries</p>
              </div>

            </div>

            <div className="stat">

              <div className="icon">
                <FiMessageSquare />
              </div>

              <div>
                <h3>Instant</h3>
                <p>SMS & Logs</p>
              </div>

            </div>

          </div>

        </div>

        <div className="hero-right">

          <div className="dashboard-card">

            <img
              src={hero}
              alt="Dashboard"
            />

          </div>

        </div>

      </section>

    </div>
  );
}
