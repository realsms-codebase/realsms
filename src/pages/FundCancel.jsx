import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTimes,
  FaExclamationCircle,
  FaRedo,
  FaClock,
} from "react-icons/fa";
import "../styles/fund-cancel.css";

const FundCancel = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    document.title = "Payment Cancelled - RealSMS";

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate("/fund-wallet");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="fund-status-page">
      <div className="fund-status-card cancel">
        {/* Floating shapes */}
        <span className="shape shape1"></span>
        <span className="shape shape2"></span>
        <span className="shape shape3"></span>

        {/* Icon */}
        <div className="icon-wrapper">
          <div className="icon-glow"></div>
          <div className="status-icon cancel-icon">
            <FaTimes />
          </div>
        </div>

        {/* Title */}
        <h2>
          Payment <span>Cancelled</span>
        </h2>

        <p>
          Your payment was cancelled or not completed.
          <br />
          Redirecting you to fund wallet...
        </p>

        {/* Warning Box */}
        <div className="warning-box">
          <FaExclamationCircle />
          <div>
            <h4>Don’t worry!</h4>
            <p>No funds were deducted from your account.</p>
          </div>
        </div>

        {/* Action Button */}
        <button
          className="try-again-btn"
          onClick={() => navigate("/fund-wallet")}
        >
          <FaRedo />
          Try Again Now
        </button>
      </div>

      {/* Countdown */}
      <div className="redirect-info">
        <FaClock />
        Redirecting automatically in <span>{countdown}</span> seconds...
      </div>
    </div>
  );
};

export default FundCancel;
