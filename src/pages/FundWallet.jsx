// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/fundwallet.css";

// import usdtLogo from "../assets/usdt-logo.png";
// import paystackLogo from "../assets/paystack.png";
// import flutterwaveLogo from "../assets/flutterwave.png";
// import korapayLogo from "../assets/korapay.png"; // ✅ added

// const FundWallet = () => {
//   const navigate = useNavigate();

//   // 🔥 Toggle payment methods here
//   const usdtEnabled = true;
//   const paystackEnabled = false;
//   const flutterwaveEnabled = true;
//   const korapayEnabled = true; 

//   useEffect(() => {
//     document.title = "Fund Wallet - RealSMS";
//   }, []);

//   return (
//     <div className="fund-wallet-page">
//       <div className="fund-wallet-card">
//         <h2 className="fund-title">Fund Wallet</h2>

//         {/* USDT */}
//         <div
//           className={`payment-option ${usdtEnabled ? "clickable" : "disabled"}`}
//           onClick={() => usdtEnabled && navigate("/fund-wallet/usdt")}
//         >
//           <div className="payment-left">
//             <img src={usdtLogo} alt="USDT" className="payment-icon" />
//             <div className="payment-text">
//               <h4>USDT</h4>
//               <span>
//                 {usdtEnabled ? "TRC 20 Network" : "Temporarily Unavailable"}
//               </span>
//             </div>
//           </div>
//           <span className="payment-arrow">{usdtEnabled ? "→" : "—"}</span>
//         </div>

//         {/* Flutterwave */}
//         <div
//           className={`payment-option ${flutterwaveEnabled ? "clickable" : "disabled"}`}
//           onClick={() =>
//             flutterwaveEnabled && navigate("/fund-wallet/flutterwave")
//           }
//         >
//           <div className="payment-left">
//             <img
//               src={flutterwaveLogo}
//               alt="Flutterwave"
//               className="payment-icon"
//             />
//             <div className="payment-text">
//               <h4>Pay with Flutterwave</h4>
//               <span>
//                 {flutterwaveEnabled
//                   ? "Card · Bank Transfer · USSD"
//                   : "Temporarily Unavailable"}
//               </span>
//             </div>
//           </div>
//           <span className="payment-arrow">
//             {flutterwaveEnabled ? "→" : "—"}
//           </span>
//         </div>

//         {/* Paystack */}
//         <div
//           className={`payment-option ${paystackEnabled ? "clickable" : "disabled"}`}
//           onClick={() =>
//             paystackEnabled && navigate("/fund-wallet/paystack")
//           }
//         >
//           <div className="payment-left">
//             <img src={paystackLogo} alt="Paystack" className="payment-icon" />
//             <div className="payment-text">
//               <h4>Pay with Paystack</h4>
//               <span>
//                 {paystackEnabled
//                   ? "Wallet · Bank Transfer"
//                   : "Temporarily Unavailable"}
//               </span>
//             </div>
//           </div>
//           <span className="payment-arrow">
//             {paystackEnabled ? "→" : "—"}
//           </span>
//         </div>

//         {/* Korapay ✅ NEW */}
//         <div
//           className={`payment-option ${korapayEnabled ? "clickable" : "disabled"}`}
//           onClick={() =>
//             korapayEnabled && navigate("/fund-wallet/korapay")
//           }
//         >
//           <div className="payment-left">
//             <img
//               src={korapayLogo}
//               alt="Korapay"
//               className="payment-icon"
//             />
//             <div className="payment-text">
//               <h4>Pay with Korapay</h4>
//               <span>
//                 {korapayEnabled
//                   ? "Card · Bank Transfer · Virtual Accounts"
//                   : "Temporarily Unavailable"}
//               </span>
//             </div>
//           </div>
//           <span className="payment-arrow">
//             {korapayEnabled ? "→" : "—"}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FundWallet;

import React, { useState } from "react";
import {
  FiInfo,
  FiRefreshCw,
  FiShield,
} from "react-icons/fi";

import flutterwaveLogo from "../assets/flutterwave.png";
import korapayLogo from "../assets/korapay.png";

import "../styles/fund-wallet.css";

const FundWallet = () => {
  const [amount, setAmount] = useState("5000");
  const [gateway, setGateway] = useState("flutterwave");

  const quickAmounts = [1000, 5000, 10000, 25000, 50000];

  return (
    <div className="wallet-page">
      {/* Header */}
      <div className="wallet-header">
        <div>
          <h1>Fund Wallet</h1>
          <p>Top up your wallet instantly using secure payment gateways.</p>
        </div>

        <button className="wallet-refresh-btn">
          <FiRefreshCw />
          Refresh Balance
        </button>
      </div>

      <div className="wallet-grid">
        {/* Left */}
        <div className="wallet-card">
          <div className="wallet-card-header">
            <h3>Instant Top-Up</h3>
            <span>Fast • Secure • Instant</span>
          </div>

          {/* Amount */}
          <div className="wallet-field">
            <label>Enter Amount</label>

            <div className="wallet-amount-box">
              <span>₦</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="5000"
              />
            </div>

            <div className="wallet-quick-amounts">
              {quickAmounts.map((amt) => (
                <button
                  key={amt}
                  className={Number(amount) === amt ? "active" : ""}
                  onClick={() => setAmount(amt)}
                >
                  ₦{amt.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          {/* Gateway */}
          <div className="wallet-field">
            <label>Select Payment Method</label>

            <div
              className={`gateway-card ${
                gateway === "flutterwave" ? "active" : ""
              }`}
              onClick={() => setGateway("flutterwave")}
            >
              <div className="gateway-left">
                <img src={flutterwaveLogo} alt="" />

                <div>
                  <h4>Flutterwave</h4>
                  <p>Card • Transfer • USSD</p>
                </div>
              </div>

              <input
                type="radio"
                checked={gateway === "flutterwave"}
                readOnly
              />
            </div>

            <div
              className={`gateway-card ${
                gateway === "korapay" ? "active" : ""
              }`}
              onClick={() => setGateway("korapay")}
            >
              <div className="gateway-left">
                <img src={korapayLogo} alt="" />

                <div>
                  <h4>Korapay</h4>
                  <p>Card • Bank Transfer</p>
                </div>
              </div>

              <input
                type="radio"
                checked={gateway === "korapay"}
                readOnly
              />
            </div>
          </div>

          <button className="wallet-fund-btn">
            Fund Wallet
          </button>

          <div className="wallet-notice">
            <FiInfo />
            Payments are encrypted and securely processed.
          </div>
        </div>

        {/* Right */}
        <div className="summary-card">
          <h3>Top-Up Summary</h3>

          <div className="summary-row">
            <span>Amount</span>
            <strong>₦{Number(amount || 0).toLocaleString()}</strong>
          </div>

          <div className="summary-row">
            <span>Gateway</span>
            <strong>
              {gateway === "flutterwave"
                ? "Flutterwave"
                : "Korapay"}
            </strong>
          </div>

          <div className="summary-row">
            <span>Fee</span>
            <strong>₦0</strong>
          </div>

          <div className="summary-divider" />

          <div className="summary-total">
            <span>You’ll Receive</span>
            <h2>₦{Number(amount || 0).toLocaleString()}</h2>
          </div>

          <div className="security-box">
            <FiShield />
            <div>
              <h4>Secure Payments</h4>
              <p>Your transactions are protected.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundWallet;
