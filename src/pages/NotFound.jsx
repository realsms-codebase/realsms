import React from "react";
import { Link } from "react-router-dom";
import { FiAlertCircle, FiHome } from "react-icons/fi";
import "../styles/notfound.css";

const NotFound = () => {
    document.title = "404 - Page Not Found | RealSMS";

    return (
        <div className="notfound-page">
            <div className="notfound-card">
                <FiAlertCircle className="notfound-icon" />

                <h1>404</h1>

                <h2>Page Not Found</h2>

                <p>
                    Sorry, the page you're looking for doesn't exist or has
                    been moved.
                </p>

                <Link to="/dashboard" className="notfound-btn">
                    <FiHome />
                    Back to Dashboard
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
