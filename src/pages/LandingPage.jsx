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
    FaAmazon,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
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

{/* ======================================
            FEATURES
====================================== */}

<section className="premium-features">

    {/* ================= LEFT CARD ================= */}

    <div className="premium-card">

        <div className="premium-content">

            <div className="feature-tag blue">

                <span className="tag-icon">🛡️</span>

                <span>Virtual Numbers</span>

            </div>

            <h2>
                Receive SMS online
                <br />
                with virtual numbers
            </h2>

            <p>
                Get virtual phone numbers from over 100 countries
                and receive SMS & OTPs instantly.
            </p>

            <div className="feature-list">

                <div className="feature-item">
                    <span>✓</span>
                    Numbers from 100+ countries
                </div>

                <div className="feature-item">
                    <span>✓</span>
                    Real SIM based numbers
                </div>

                <div className="feature-item">
                    <span>✓</span>
                    Instant activation
                </div>

                <div className="feature-item">
                    <span>✓</span>
                    Works with all apps & services
                </div>

                <div className="feature-item">
                    <span>✓</span>
                    Keep your privacy safe
                </div>

            </div>

            <button className="premium-btn outline-blue">

                Get virtual number

                <FiArrowRight />

            </button>

        </div>

        {/* ================= GRAPHIC ================= */}

        <div className="numbers-preview">

            <div className="world-ring"></div>

            <div className="world-glow"></div>

            <div className="world-circle"></div>

            {/* USA */}

            <div className="country-card usa">

                <div className="country-header">

                    <span className="country-name">
                        🇺🇸 United States
                    </span>

                </div>

                <h4>+1 415 555 0198</h4>

                <div className="country-status">

                    <span className="online"></span>

                    Online

                </div>

            </div>

            {/* UK */}

            <div className="country-card uk">

                <div className="country-header">

                    <span className="country-name">
                        🇬🇧 United Kingdom
                    </span>

                </div>

                <h4>+44 7712 345678</h4>

                <div className="country-status">

                    <span className="online"></span>

                    Online

                </div>

            </div>

            {/* Germany */}

            <div className="country-card germany">

                <div className="country-header">

                    <span className="country-name">
                        🇩🇪 Germany
                    </span>

                </div>

                <h4>+49 1512 3456789</h4>

                <div className="country-status">

                    <span className="online"></span>

                    Online

                </div>

            </div>

        </div>

    </div>

    {/* ================= RIGHT CARD ================= */}

    <div className="premium-card">

        <div className="premium-content">

            <div className="feature-tag green">

                <span className="tag-icon">🗄️</span>

                <span>Social Media Logs</span>

            </div>

            <h2>
                Access real SMS &
                <br />
                social media logs
            </h2>

            <p>
                Access real messages and OTPs from popular
                platforms in real-time.
            </p>

            <div className="feature-list">

                <div className="feature-item">
                    <span>✓</span>
                    Logs from popular platforms
                </div>

                <div className="feature-item">
                    <span>✓</span>
                    Real messages & OTPs
                </div>

                <div className="feature-item">
                    <span>✓</span>
                    Fast & reliable delivery
                </div>

                <div className="feature-item">
                    <span>✓</span>
                    Perfect for developers & businesses
                </div>

                <div className="feature-item">
                    <span>✓</span>
                    Easy API integration
                </div>

            </div>

            <button className="premium-btn outline-green">

                Browse logs

                <FiArrowRight />

            </button>

        </div>

        {/* ================= PHONE ================= */}

        <div className="phone-preview">

            <div className="phone">

                <div className="phone-notch"></div>

                <div className="phone-screen">

                    <div className="phone-app google">
                        <FaGoogle />
                    </div>

                    <div className="phone-app telegram">
                        <FaTelegramPlane />
                    </div>

                    <div className="phone-app whatsapp">
                        <FaWhatsapp />
                    </div>

                    <div className="phone-app instagram">
                        <FaInstagram />
                    </div>

                    <div className="phone-app amazon">
                        <FaAmazon />
                    </div>

                    <div className="phone-app more">
                        <BsThreeDots />
                    </div>

                </div>

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
