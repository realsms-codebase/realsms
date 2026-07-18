import React, { useState, useEffect } from "react";
import { FiSearch, FiCopy, FiX } from "react-icons/fi";
import SocialServiceCard from "../components/SocialServiceCard";
import "../styles/buy-number.css";

// ICONS
import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";
import tiktokIcon from "../assets/tiktok.png";
import mailIcon from "../assets/mail.png";
import googleVoiceIcon from "../assets/google-voice.png";
import netflixIcon from "../assets/netflix.png";

// NEW ICONS
import vpnIcon from "../assets/vpn.png";
import textingIcon from "../assets/texting.png";

import { useBalance } from "../context/BalanceContext";

const API = process.env.REACT_APP_API_URL;

// Platform icons
const platformIcons = {
  Instagram: instagramIcon,
  Facebook: facebookIcon,
  Twitter: twitterIcon,
  "Twitter (X)": twitterIcon,
  TikTok: tiktokIcon,
  Mail: mailIcon,
  "Google Voice": googleVoiceIcon,
  Netflix: netflixIcon,
  VPN: vpnIcon,
  "Texting Apps": textingIcon,
};

const PurchaseLogs = ({ darkMode }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeOrder, setActiveOrder] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const { balance, debitWallet } = useBalance();

  const token = localStorage.getItem("token");

  // INIT categories
  useEffect(() => {
    document.title = "Purchase Logs - RealSMS";

    setCategories([
      { id: 1, name: "Instagram" },
      { id: 2, name: "Facebook" },
      { id: 3, name: "Twitter (X)" },
      { id: 4, name: "TikTok" },
      { id: 5, name: "Mail" },
      { id: 6, name: "Google Voice" },
      { id: 7, name: "Netflix" },
      { id: 8, name: "VPN" },
      { id: 9, name: "Texting Apps" },
    ]);
  }, []);

  // FETCH LOGS
  useEffect(() => {
    if (!selectedCategory) return;

    const fetchLogs = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${API}/api/log`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        const json = await res.json();

        const logsArray = Array.isArray(json)
          ? json
          : Array.isArray(json.data)
          ? json.data
          : [];

        const filtered = logsArray.filter(
          (log) =>
            typeof log.platform === "string" &&
            log.platform.toLowerCase().includes(selectedCategory.name.toLowerCase())
        );

        const formatted = filtered.map((log) => ({
          id: log._id,
          name: log.name,
          price: log.price,
          stock: log.stock,
          type: log.type,
          details: log.details,
          icon: platformIcons[log.platform] || instagramIcon,
        }));

        setProducts(formatted);
      } catch (err) {
        console.error("Fetch logs error:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, [selectedCategory, token]);

  // CATEGORY CHANGE
  const handleCategoryChange = (e) => {
    const cat = categories.find((c) => c.id === Number(e.target.value));
    setSelectedCategory(cat || null);
    setProducts([]);
    setActiveOrder(null);
    setSearch("");
  };

  // BUY HANDLER
  const handleBuy = async (product, done, quantity) => {
    if (!token) {
      alert("You must be logged in to make a purchase");
      done();
      return;
    }

    const totalCost = product.price * quantity;

    if (balance < totalCost) {
      alert("Insufficient wallet balance");
      done();
      return;
    }

    try {
      const res = await fetch(`${API}/api/log/buy/${product.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantity }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.message || "Purchase failed");
        done();
        return;
      }

      await debitWallet(totalCost);

      setActiveOrder({
        ...product,
        quantity,
        details: data.order?.details || "No details available",
      });

      setProducts((prev) =>
        prev.map((p) =>
          p.id === product.id ? { ...p, stock: data.remainingStock } : p
        )
      );

      done();
    } catch (err) {
      console.error("Buy error:", err);
      alert("Something went wrong");
      done();
    }
  };

  // SEARCH FILTER
  const filteredProducts = products?.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  ) || [];

  // COPY FEEDBACK
  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <div className={`marketplace ${darkMode ? "dark" : ""}`}>
  <div className="purchase-logs-card">

    <div className="purchase-logs-header">

      <div>
        <h2>Purchase Logs</h2>
        <p>
          Browse premium social media accounts with instant delivery.
        </p>
      </div>

      {selectedCategory && (
        <span className="purchase-logs-count">
          {filteredProducts.length} Products
        </span>
      )}

    </div>

    {/* CATEGORY */}

    <select
      className="purchase-logs-select"
      value={selectedCategory?.id || ""}
      onChange={handleCategoryChange}
    >
      <option value="">Select Platform</option>

      {categories.map((category) => (
        <option
          key={category.id}
          value={category.id}
        >
          {category.name}
        </option>
      ))}

    </select>

    {/* SEARCH */}

    <div className="purchase-logs-search">

      <input
        type="text"
        className="purchase-logs-search-input"
        placeholder="Search accounts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        disabled={!selectedCategory || loading}
      />

      <FiSearch className="purchase-logs-search-icon" />

    </div>

    {/* PRODUCTS */}

    {(selectedCategory || loading) && (

      <div className="purchase-logs-services">

        {loading ? (

          <div className="purchase-logs-loading">

            <div
              className={`purchase-logs-spinner ${
                darkMode ? "dark" : ""
              }`}
            />

            <p>Loading products...</p>

          </div>

        ) : filteredProducts.length === 0 ? (

          <p className="purchase-logs-empty">
            No products available.
          </p>

        ) : (

          <div className="purchase-logs-grid">

            {filteredProducts.map((product) => (
              <SocialServiceCard
                key={product.id}
                product={product}
                onBuy={handleBuy}
              />
            ))}

          </div>

        )}

      </div>

    )}

    {/* PURCHASE RESULT */}

    {activeOrder && (

      <div className="purchase-logs-order">

        <FiX
          className="purchase-logs-order-close"
          onClick={() => setActiveOrder(null)}
        />

        <div className="purchase-logs-order-header">

          <strong>Purchased Account</strong>

          <FiCopy
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigator.clipboard.writeText(activeOrder.details);
              setCopied(true);
            }}
          />

        </div>

        <pre className="purchase-logs-details">
          {activeOrder.details}
        </pre>

        <p className="purchase-logs-success">
          Delivered {activeOrder.quantity} account(s) ✅{" "}
          {copied && "(Copied!)"}
        </p>

        <button
          className="purchase-logs-copy-btn"
          onClick={() => {
            navigator.clipboard.writeText(activeOrder.details);
            setCopied(true);
          }}
        >
          Copy All Details
        </button>

      </div>

    )}

  </div>
</div>
  );
};

export default PurchaseLogs;
