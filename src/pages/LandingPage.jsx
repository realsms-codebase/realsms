import { useRef } from "react";
import {
    FiArrowRight,
    FiGlobe,
    FiMessageSquare,
    FiZap,
    FiGrid,
    FiShield,
    FiSmartphone,
    FiTrendingUp,
    FiPhone,
    FiDatabase,
} from "react-icons/fi";
import logo from "../assets/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, } from "react-icons/fa";
import "../styles/landing.css";
import hero from "../assets/hero-dashboard.png";

export default function LandingPage() {

    const heroRef = useRef(null);
    const whySectionRef = useRef(null);
    const howSectionRef = useRef(null);
    const footerRef = useRef(null);

    return (
        <div className="landing">

            {/* NAVBAR */}

            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="RealSMS" />
                </div>

                <ul className="nav-links">
                    <li
                        onClick={() =>
                            heroRef.current?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                        }
                    >
                        Discover
                    </li>

                    <li
                        onClick={() =>
                            whySectionRef.current?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                        }
                    >
                        Why Choose Us
                    </li>

                    <li>Docs</li>

                    <li
                        onClick={() =>
                            howSectionRef.current?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                        }
                    >
                        Overview
                    </li>

                    <li
                        onClick={() =>
                            footerRef.current?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                            })
                        }
                    >
                        Reach Us
                    </li>
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

            <section
                ref={heroRef}
                className="hero"
            >

                <div className="hero-left">

                    <div className="hero-badge">
                        Virtual numbers & Social media logs
                    </div>

                    <h1>
                        Virtual numbers and
                        <br />
                        Social media logs
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
                            Get Started Now
                            <FiArrowRight />
                        </button>

                        <button
                            className="secondary-btn"
                            onClick={() =>
                                whySectionRef.current?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                })
                            }
                        >
                            <FiGrid />
                            Explore Services
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
OUR SERVICES
====================================== */}
            <section className="services-section">

                <div className="services-header">

                    <span className="services-badge">
                        Our Services
                    </span>

                    <h2>
                        Everything you need in one secure marketplace
                    </h2>

                    <p>
                        Buy virtual phone numbers from over 100 countries or browse
                        premium social media logs—all from one fast, secure and
                        reliable platform.
                    </p>

                </div>

                <div className="services-grid">

                    <div className="service-card">

                        <div className="service-icon">
                            <FiPhone />
                        </div>

                        <h3>Virtual Numbers</h3>

                        <p>
                            Purchase virtual numbers for WhatsApp, Telegram,
                            Google, Facebook, Instagram, TikTok and hundreds of
                            other services with instant SMS delivery.
                        </p>

                    </div>

                    <div className="service-card">

                        <div className="service-icon purple">
                            <FiDatabase />
                        </div>

                        <h3>Social Media Logs</h3>

                        <p>
                            Browse a growing marketplace of social media logs with
                            secure access, competitive pricing and instant delivery
                            after purchase.
                        </p>

                    </div>

                </div>

            </section>
            {/* ======================================
WHY CHOOSE REALSMS
====================================== */}

            <section
                ref={whySectionRef}
                className="why-realsms"
            >

                <div className="why-header">

                    <span className="why-badge">
                        Why Choose RealSMS
                    </span>

                    <h2>
                        Everything you need for fast,
                        secure virtual numbers and
                        SMS verification.
                    </h2>

                    <p>
                        Built for developers, businesses and individuals who need
                        reliable virtual phone numbers, instant SMS delivery and
                        access to social media logs.
                    </p>

                </div>

                <div className="why-grid">

                    <div className="why-card">

                        <div className="why-icon">
                            <FiZap />
                        </div>

                        <h3>Instant SMS Delivery</h3>

                        <p>
                            Receive verification codes and OTP messages within
                            seconds after purchasing a virtual number.
                        </p>

                    </div>

                    <div className="why-card">

                        <div className="why-icon">
                            <FiGlobe />
                        </div>

                        <h3>100+ Countries</h3>

                        <p>
                            Access virtual phone numbers from a growing list of
                            countries for registrations worldwide.
                        </p>

                    </div>

                    <div className="why-card">

                        <div className="why-icon">
                            <FiShield />
                        </div>

                        <h3>Privacy Protection</h3>

                        <p>
                            Keep your personal phone number private while creating
                            and verifying online accounts.
                        </p>

                    </div>

                    <div className="why-card">

                        <div className="why-icon">
                            <FiSmartphone />
                        </div>

                        <h3>Wide Platform Support</h3>

                        <p>
                            Works with popular services including WhatsApp,
                            Telegram, Google, Facebook, TikTok, Instagram and
                            many others.
                        </p>

                    </div>

                    <div className="why-card">

                        <div className="why-icon">
                            <FiTrendingUp />
                        </div>

                        <h3>Live Inventory</h3>

                        <p>
                            Browse available countries, services and prices that
                            are updated in real time before you purchase.
                        </p>

                    </div>

                    <div className="why-card">

                        <div className="why-icon">
                            <FiMessageSquare />
                        </div>

                        <h3>Social Media Logs</h3>

                        <p>
                            Browse available social media logs through a secure,
                            simple and easy-to-use marketplace.
                        </p>

                    </div>

                </div>

            </section>

            {/* ============================
    HOW IT WORKS
============================ */}

            <section
                ref={howSectionRef}
                className="how-section"
            >

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

            <footer
                ref={footerRef}
                className="footer"
            >

                <div className="footer-grid">

                    <div className="footer-brand">

                        <div className="logo">
                            <img src={logo} alt="RealSMS" />
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
