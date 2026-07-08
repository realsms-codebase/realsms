import {
  FiArrowRight,
  FiChevronDown,
  FiGlobe,
  FiMessageSquare,
} from "react-icons/fi";
import {
  FaGoogle,
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
  FaAmazon,
} from "react-icons/fa";

import { BsThreeDots } from "react-icons/bs";
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
{/* FEATURES */}

<section className="features">

  {/* CARD 1 */}

  <div className="feature-card">

    <div className="feature-badge blue">
      Virtual Numbers
    </div>

    <h2>
      Receive SMS online
      <br />
      with virtual numbers
    </h2>

    <ul>

      <li>✓ Numbers from 100+ countries</li>

      <li>✓ Real SIM based numbers</li>

      <li>✓ Instant activation</li>

      <li>✓ Works with all apps & services</li>

      <li>✓ Keep your privacy safe</li>

    </ul>

    <button className="outline-btn">
      Get virtual number
      <FiArrowRight />
    </button>

    <div className="feature-graphic">

      <div className="globe"></div>

      <div className="floating-card us">
        🇺🇸 +1 415 555 0198
      </div>

      <div className="floating-card uk">
        🇬🇧 +44 7712 345678
      </div>

      <div className="floating-card de">
        🇩🇪 +49 1512 3456789
      </div>

    </div>

  </div>

  {/* CARD 2 */}

  <div className="feature-card">

    <div className="feature-badge green">
      Social Media Logs
    </div>

    <h2>
      Access real SMS &
      <br />
      social media logs
    </h2>

    <ul>

      <li>✓ Logs from popular platforms</li>

      <li>✓ Real messages and OTPs</li>

      <li>✓ Fast & reliable delivery</li>

      <li>✓ Perfect for developers & businesses</li>

      <li>✓ Easy API integration</li>

    </ul>

    <button className="outline-btn">
      Browse logs
      <FiArrowRight />
    </button>

   <div className="apps-preview">

  <div className="app google">
    <FaGoogle />
  </div>

  <div className="app telegram">
    <FaTelegramPlane />
  </div>

  <div className="app whatsapp">
    <FaWhatsapp />
  </div>

  <div className="app instagram">
    <FaInstagram />
  </div>

  <div className="app amazon">
    <FaAmazon />
  </div>

  <div className="app more">
    <BsThreeDots />
  </div>

</div>
  </div>

</section>

      {/* ============================
    HOW IT WORKS
============================ */}

<section className="how-section">

  <div className="section-title">

    <span>How it works</span>

    <h2>
      Get started in
      <br />
      less than 60 seconds
    </h2>

    <p>
      Buy a virtual number or access social media logs in just a few simple
      steps.
    </p>

  </div>

  <div className="steps">

    <div className="step">

      <div className="step-number">
        01
      </div>

      <h3>Create your account</h3>

      <p>
        Register in seconds and verify your email to unlock the marketplace.
      </p>

    </div>

    <div className="step-line"></div>

    <div className="step">

      <div className="step-number">
        02
      </div>

      <h3>Select a service</h3>

      <p>
        Choose from virtual numbers, SMS activations or social media logs.
      </p>

    </div>

    <div className="step-line"></div>

    <div className="step">

      <div className="step-number">
        03
      </div>

      <h3>Receive instantly</h3>

      <p>
        Get OTPs, messages and account logs delivered instantly with zero delay.
      </p>

    </div>

  </div>

</section>

{/* ============================
    CTA
============================ */}

<section className="cta">

  <div className="cta-content">

    <span className="cta-badge">
      Ready?
    </span>

    <h2>
      Start receiving SMS
      <br />
      in minutes.
    </h2>

    <p>
      Join thousands of developers, businesses and marketers using our secure
      virtual number platform every day.
    </p>

    <div className="cta-buttons">

      <button className="primary-btn">
        Create Free Account
        <FiArrowRight />
      </button>

      <button className="secondary-btn">
        Contact Sales
      </button>

    </div>

  </div>

  <div className="cta-decoration">

    <div className="circle one"></div>

    <div className="circle two"></div>

    <div className="circle three"></div>

  </div>

</section>
    </div>
  );
}
