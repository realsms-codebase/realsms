import React, { useState } from "react";

// Format price in Naira
const formatNaira = (amount) => {
  if (amount == null) return "N/A";
  return `₦${Number(amount).toLocaleString()}`;
};

const ServiceCard = ({
  service,
  onBuy,
  disabled = false,
}) => {
  const [buying, setBuying] =
    useState(false);

  const unavailable =
    service.price == null;

  const isDisabled =
    disabled ||
    unavailable ||
    buying;

  const handleBuyClick =
    async () => {
      if (isDisabled) return;

      setBuying(true);

      try {
        await onBuy(service);
      } finally {
        setBuying(false);
      }
    };

  return (
    <div
      className={`service-card ${
        isDisabled
          ? "disabled"
          : ""
      }`}
    >
      {/* Left */}
      <div className="service-left">
        <img
          src={service.logo}
          alt={service.name}
          className="service-icon"
          onError={(e) => {
            e.target.style.display =
              "none";

            e.target.nextSibling.style.display =
              "flex";
          }}
        />

        <div
          className="service-icon-placeholder"
          style={{
            display:
              service.logo
                ? "none"
                : "flex",
          }}
        >
          {service.name
            ?.charAt(0)
            .toUpperCase()}
        </div>

        <div className="service-info">
         <h4>
  {service.name?.length > 15
    ? service.name.slice(0, 15) + "..."
    : service.name}
</h4>
        </div>
      </div>

      {/* Right */}
      <div className="service-right">
        <span className="price">
          {formatNaira(
            service.price
          )}
        </span>

        <button
          className="buy-btn"
          onClick={
            handleBuyClick
          }
          disabled={
            isDisabled
          }
        >
          {buying
            ? "Buying..."
            : unavailable
            ? "N/A"
            : "Buy"}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
