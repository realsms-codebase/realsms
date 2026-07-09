import {
    FiArrowRight,
    FiChevronDown,
    FiGlobe,
    FiMessageSquare,
} from "react-icons/fi";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, } from "react-icons/fa";
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
                    <button className="landing-login-btn">
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


<div className="why-card">
    <div className="why-icon">
        <FiZap />
    </div>
    <h3>Instant SMS Delivery</h3>
    <p>
        Receive OTPs and verification codes within seconds after purchasing a virtual number.
    </p>
</div>

<div className="why-card">
    <div className="why-icon">
        <FiGlobe />
    </div>
    <h3>Global Coverage</h3>
    <p>
        Choose virtual numbers from over 100 countries for your verification needs.
    </p>
</div>

<div className="why-card">
    <div className="why-icon">
        <FiShield />
    </div>
    <h3>Privacy First</h3>
    <p>
        Keep your personal phone number private by using virtual numbers for online registrations.
    </p>
</div>

<div className="why-card">
    <div className="why-icon">
        <FiSmartphone />
    </div>
    <h3>Wide Platform Support</h3>
    <p>
        Compatible with popular services including WhatsApp, Telegram, Google, Facebook and many more.
    </p>
</div>

<div className="why-card">
    <div className="why-icon">
        <FiTrendingUp />
    </div>
    <h3>Live Inventory</h3>
    <p>
        View available countries, services and pricing updated in real time before making a purchase.
    </p>
</div>

<div className="why-card">
    <div className="why-icon">
        <FiMessageSquare />
    </div>
    <h3>Social Media Logs</h3>
    <p>
        Browse available social media logs through a fast, secure and easy-to-use marketplace.
    </p>
</div>
            
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

            {/* ===========================
FOOTER
=========================== */}

            <footer className="footer">

                <div className="footer-grid">

                    <div className="footer-brand">

                        <div className="logo">

                            <div className="logo-icon">
                                💬
                            </div>

                            <span>realsms</span>

                        </div>

                        <p>

                            The fastest platform for virtual phone
                            numbers, SMS verification and social
                            media logs.

                        </p>

                        <div className="social-icons">

                            <a href="/">
                                <FaFacebookF />
                            </a>

                            <a href="/">
                                <FaTwitter />
                            </a>

                            <a href="/">
                                <FaInstagram />
                            </a>

                            <a href="/">
                                <FaLinkedinIn />
                            </a>

                            <a href="/">
                                <FaGithub />
                            </a>

                        </div>

                    </div>

                    <div>

                        <h4>Products</h4>

                        <ul>

                            <li>Virtual Numbers</li>

                            <li>SMS Verification</li>

                            <li>Social Media Logs</li>

                            <li>API</li>

                            <li>Pricing</li>

                        </ul>

                    </div>

                    <div>

                        <h4>Resources</h4>

                        <ul>

                            <li>Documentation</li>

                            <li>Developers</li>

                            <li>Blog</li>

                            <li>Status</li>

                            <li>Help Center</li>

                        </ul>

                    </div>

                    <div>

                        <h4>Company</h4>

                        <ul>

                            <li>About</li>

                            <li>Careers</li>

                            <li>Contact</li>

                            <li>Privacy</li>

                            <li>Terms</li>

                        </ul>

                    </div>

                    <div>

                        <h4>Newsletter</h4>

                        <p>

                            Receive updates about new countries,
                            features and product launches.

                        </p>

                        <div className="newsletter">

                            <input
                                type="email"
                                placeholder="Enter your email"
                            />

                            <button>

                                Subscribe

                            </button>

                        </div>

                    </div>

                </div>

                <div className="footer-bottom">

                    <p>

                        © 2026 realsms. All rights reserved.

                    </p>

                    <div>

                        Secure payments • 99.99% uptime • GDPR Ready

                    </div>

                </div>

            </footer>
        </div>
    );
}
