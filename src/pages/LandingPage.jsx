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
           {/* ===========================
    PREMIUM FEATURES
=========================== */}

<section className="premium-features">

    {/* LEFT CARD */}

    <div className="premium-card">

        <div className="premium-content">

            <span className="feature-tag blue">
                Virtual Numbers
            </span>

            <h2>
                Receive SMS online
                <br />
                from over
                <span> 100+ countries</span>
            </h2>

            <p>
                Secure virtual phone numbers for OTP verification,
                registrations and business automation.
            </p>

            <div className="feature-list">

                <div className="feature-item">
                    <span>✓</span>
                    Instant SMS delivery
                </div>

                <div className="feature-item">
                    <span>✓</span>
                    Real SIM numbers
                </div>

                <div className="feature-item">
                    <span>✓</span>
                    Keep your identity private
                </div>

                <div className="feature-item">
                    <span>✓</span>
                    Works with Telegram, Google,
                    WhatsApp and more
                </div>

            </div>

            <button className="premium-btn">

                Get Started

                <FiArrowRight/>

            </button>

        </div>

        {/* GRAPHIC */}

        <div className="numbers-preview">

            <div className="world-glow"></div>

            <div className="world-circle"></div>

            <div className="country-card usa">

                <div className="country-top">

                    🇺🇸 United States

                    <span className="online"></span>

                </div>

                <h4>+1 415 555 0198</h4>

            </div>

            <div className="country-card uk">

                <div className="country-top">

                    🇬🇧 United Kingdom

                    <span className="online"></span>

                </div>

                <h4>+44 7712 345678</h4>

            </div>

            <div className="country-card germany">

                <div className="country-top">

                    🇩🇪 Germany

                    <span className="online"></span>

                </div>

                <h4>+49 1512 345678</h4>

            </div>

            <div className="country-card canada">

                <div className="country-top">

                    🇨🇦 Canada

                    <span className="online"></span>

                </div>

                <h4>+1 236 554 8890</h4>

            </div>

        </div>

    </div>

    {/* RIGHT CARD */}

    <div className="premium-card">

        <div className="premium-content">

            <span className="feature-tag green">
                Social Media Logs
            </span>

            <h2>

                Access premium
                <br />
                social media
                <span> logs</span>

            </h2>

            <p>

                Purchase verified account logs securely with
                instant delivery and live inventory.

            </p>

            <div className="feature-list">

                <div className="feature-item">
                    <span>✓</span>
                    Verified account inventory
                </div>

                <div className="feature-item">
                    <span>✓</span>
                    Fast checkout
                </div>

                <div className="feature-item">
                    <span>✓</span>
                    Secure encrypted delivery
                </div>

                <div className="feature-item">
                    <span>✓</span>
                    Updated every few minutes
                </div>

            </div>

            <button className="premium-btn">

                Browse Logs

                <FiArrowRight/>

            </button>

        </div>

        {/* PHONE */}

        <div className="phone-preview">

            <div className="phone">

                <div className="phone-notch"></div>

                <div className="phone-screen">

                    <div className="phone-app google">

                        <FaGoogle/>

                    </div>

                    <div className="phone-app telegram">

                        <FaTelegramPlane/>

                    </div>

                    <div className="phone-app whatsapp">

                        <FaWhatsapp/>

                    </div>

                    <div className="phone-app instagram">

                        <FaInstagram/>

                    </div>

                    <div className="phone-app amazon">

                        <FaAmazon/>

                    </div>

                    <div className="phone-app more">

                        <BsThreeDots/>

                    </div>

                </div>

            </div>

            <div className="floating-pill top">

                🔒 Secure Delivery

            </div>

            <div className="floating-pill bottom">

                ⚡ Instant Access

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
