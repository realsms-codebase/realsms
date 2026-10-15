import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import heroImg from "../assets/hero-img.png";
import logo from "../assets/logo.png";
import "../styles/verify-email.css";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL;
  const email = location.state?.email || "";

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [message, setMessage] = useState(
    location.state?.message || ""
  );
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Verify Email - RealSMS";
  }, []);

  const handleVerify = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Registration email is missing. Please register again.");
      return;
    }

    if (!/^\d{6}$/.test(code)) {
      setError("Enter the 6-digit verification code.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${API_URL}/api/auth/verify-email`,
        {
          email,
          code,
        }
      );

      setMessage(
        res.data.message || "Email verified successfully."
      );

      // Do not automatically log in unless your backend
      // explicitly implements that flow.
      navigate("/login", {
        replace: true,
        state: {
          verified: true,
          email,
          message:
            res.data.message ||
            "Email verified. You can now sign in.",
        },
      });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Verification failed. Check your code and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    setMessage("");

    if (!email) {
      setError("Email address is missing. Please register again.");
      return;
    }

    try {
      setResending(true);

      const res = await axios.post(
        `${API_URL}/api/auth/resend-verification`,
        { email }
      );

      setMessage(
        res.data.message ||
          "A new verification code has been sent to your email."
      );

      setCode("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Could not resend the verification code. Please try again."
      );
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="register-wrapper verify-email-wrapper">
      <div className="register-illustration">
        <img src={heroImg} alt="Email verification illustration" />
      </div>

      <div className="register-card verify-email-card">
        <div className="register-mobile-logo">
          <img src={logo} alt="RealSMS Logo" />
        </div>

        <div className="verify-email-icon" aria-hidden="true">
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </div>

        <h2>Verify your email</h2>

        <p className="verify-email-description">
          We've sent a 6-digit verification code to
        </p>

        <p className="verify-email-address">
          {email || "Your registered email"}
        </p>

        {message && (
          <div className="verify-message" role="status">
            {message}
          </div>
        )}

        {error && (
          <div className="verify-error" role="alert">
            {error}
          </div>
        )}

        <form className="register-form" onSubmit={handleVerify}>
          <label htmlFor="verification-code">
            Verification code
          </label>

          <input
            id="verification-code"
            className="verification-code-input"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            placeholder="000000"
            value={code}
            onChange={(e) =>
              setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
            }
            maxLength={6}
            required
            aria-describedby="verification-help"
          />

          <p id="verification-help" className="verification-help">
            Enter the code sent to your email address.
          </p>

          <button
            type="submit"
            className="register-btn"
            disabled={loading || code.length !== 6 || !email}
          >
            {loading ? "Verifying..." : "Verify Email"}
          </button>
        </form>

        <div className="resend-code">
          <span>Didn't receive the code?</span>

          <button
            type="button"
            onClick={handleResend}
            disabled={resending || loading || !email}
          >
            {resending ? "Sending..." : "Resend code"}
          </button>
        </div>

        <p className="signin-text">
          <Link to="/register">Back to registration</Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
