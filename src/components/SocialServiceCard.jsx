import React, { useState } from "react";  
import { FiZap } from "react-icons/fi";
import "../styles/dashboard.css";

const formatNaira = (amount) => {
  if (amount == null) return "Price N/A";
  return `₦${Number(amount).toLocaleString()}`;
};

const SocialServiceCard = ({ product, onBuy, disabled }) => {
  const [quantity, setQuantity] = useState(1);
  const [buying, setBuying] = useState(false);

  const increase = () => {
    if (quantity < product.stock) {
      setQuantity((q) => q + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    }
  };

  const handleBuy = () => {
    if (disabled || buying || product.price == null) return;

    setBuying(true);

    onBuy(product, () => setBuying(false), quantity);
  };

      const truncate = (text, maxLength = 70) => {
  if (!text) return "";
  return text.length > maxLength
    ? text.slice(0, maxLength) + "..."
    : text;
};

  return (
    <div className="market-card">

      <div className="market-top">

        <span className="server-tag">
          PREMIUM
        </span>

        <span
          className={`stock-tag ${
            product.stock < 20 ? "low" : ""
          }`}
        >
          {product.stock} left
        </span>

      </div>

      <div className="market-icon">
        <img
          src={product.icon}
          alt={product.name}
        />
      </div>

      <h3 title={product.name}>
  {truncate(product.name, 70)}
</h3>

      <p>{product.type}</p>

      <div className="market-price">
        {formatNaira(product.price)}
      </div>

      <div className="market-qty">

        <button
          onClick={decrease}
          disabled={quantity === 1}
        >
          −
        </button>

        <span>{quantity}</span>

        <button
          onClick={increase}
          disabled={quantity >= product.stock}
        >
          +
        </button>

      </div>

      <button
        className="market-buy"
        onClick={handleBuy}
        disabled={disabled || buying || product.price == null}
      >
        {buying ? (
          <div className="button-spinner" />
        ) : (
          <>
            <FiZap />
            Buy Now
          </>
        )}
      </button>

    </div>
  );
};

export default SocialServiceCard;
