import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCheck,
  FaCheckCircle,
  FaWallet,
  FaClock,
} from "react-icons/fa";
import "../styles/fund-success.css";

const FundSuccess = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    document.title = "Funding Successful - RealSMS";

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
      <div className="fund-status-card success">
        <span className="shape shape1"></span>
        <span className="shape shape2"></span>
        <span className="shape shape3"></span>

        {/* Success icon */}
        <div className="icon-wrapper">
          <div className="status-icon success-icon">
            <FaCheck />
          </div>
        </div>

        <h2>
          Payment <span className="success-status">Successful</span>
        </h2>

        <p>
          Your wallet has been funded successfully.
          <br />
          Redirecting you to fund wallet...
        </p>

        <div className="success-box">
          <FaCheckCircle />
          <div>
            <h4>Funds Added Successfully</h4>
            <p>Your wallet balance has been updated.</p>
          </div>
        </div>

        <button
          className="go-wallet-btn"
          onClick={() => navigate("/fund-wallet")}
        >
          <FaWallet />
          Go to Fund Wallet
        </button>
      </div>

      <div className="redirect-info">
        <FaClock />
        Redirecting automatically in <span>{countdown}</span> seconds...
      </div>
    </div>
  );
};

export default FundSuccess;
