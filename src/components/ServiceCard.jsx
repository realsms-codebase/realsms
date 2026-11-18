// import React, { useState } from "react";

// // Format price in Naira
// const formatNaira = (amount) => {
//   if (amount == null) return "N/A";
//   return `₦${Number(amount).toLocaleString()}`;
// };

// const ServiceCard = ({
//   service,
//   onBuy,
//   disabled = false,
// }) => {
//   const [buying, setBuying] =
//     useState(false);

//   const unavailable =
//     service.price == null;

//   const isDisabled =
//     disabled ||
//     unavailable ||
//     buying;

//   const handleBuyClick =
//     async () => {
//       if (isDisabled) return;

//       setBuying(true);

//       try {
//         await onBuy(service);
//       } finally {
//         setBuying(false);
//       }
//     };

//   return (
//     <div
//       className={`service-card ${
//         isDisabled
//           ? "disabled"
//           : ""
//       }`}
//     >
//       {/* Left */}
//       <div className="service-left">
//         <img
//           src={service.logo}
//           alt={service.name}
//           className="service-icon"
//           onError={(e) => {
//             e.target.style.display =
//               "none";

//             e.target.nextSibling.style.display =
//               "flex";
//           }}
//         />

//         <div
//           className="service-icon-placeholder"
//           style={{
//             display:
//               service.logo
//                 ? "none"
//                 : "flex",
//           }}
//         >
//           {service.name
//             ?.charAt(0)
//             .toUpperCase()}
//         </div>

//         <div className="service-info">
//          <h4>
//   {service.name?.length > 15
//     ? service.name.slice(0, 15) + "..."
//     : service.name}
// </h4>
//         </div>
//       </div>

//       {/* Right */}
//       <div className="service-right">
//         <span className="price">
//           {formatNaira(
//             service.price
//           )}
//         </span>

//         <button
//           className="buy-btn"
//           onClick={
//             handleBuyClick
//           }
//           disabled={
//             isDisabled
//           }
//         >
//           {buying
//             ? "Buying..."
//             : unavailable
//             ? "N/A"
//             : "Buy"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;




import React, { useState } from "react";

// Format price in Naira
const formatNaira = (amount) => {
    if (amount == null || !Number.isFinite(Number(amount))) {
        return "N/A";
    }

    return `₦${Number(amount).toLocaleString("en-NG")}`;
};

const ServiceCard = ({
    service,
    onBuy,
    disabled = false,
}) => {
    const [buyingPool, setBuyingPool] = useState(null);

    // Get available pools and sort by price.
    const poolPrices = Array.isArray(service.poolPrices)
        ? [...service.poolPrices]
            .filter(
                (item) =>
                    item.pool != null &&
                    Number.isFinite(Number(item.price)) &&
                    Number(item.price) > 0
            )
            .sort((a, b) => Number(a.price) - Number(b.price))
        : [];

    const unavailable = poolPrices.length === 0;

    const isDisabled =
        disabled || unavailable || buyingPool !== null;

    const handleBuyClick = async (poolItem) => {
        if (isDisabled || !onBuy) return;

        setBuyingPool(String(poolItem.pool));

        try {
            await onBuy(service, poolItem);
        } catch (error) {
            console.error("Pool purchase error:", error);
        } finally {
            setBuyingPool(null);
        }
    };

    return (
        <div className={`service-card ${isDisabled ? "disabled" : ""}`}>

            {/* Service Header */}
            <div className="service-left">
                <img
                    src={service.logo}
                    alt={service.name}
                    className="service-icon"
                    onError={(e) => {
                        e.target.style.display = "none";

                        if (e.target.nextSibling) {
                            e.target.nextSibling.style.display = "flex";
                        }
                    }}
                />

                <div
                    className="service-icon-placeholder"
                    style={{
                        display: service.logo ? "none" : "flex",
                    }}
                >
                    {service.name?.charAt(0).toUpperCase()}
                </div>

                <div className="service-info">
                    <h4>
                        {service.name?.length > 15
                            ? service.name.slice(0, 15) + "..."
                            : service.name}
                    </h4>

                    <span className="pool-count">
                        {unavailable
                            ? "Unavailable"
                            : `${poolPrices.length} pools available`}
                    </span>
                </div>
            </div>

            {/* Pool Prices */}
            <div className="service-pools">
                {unavailable ? (
                    <div className="pool-unavailable">
                        <span>N/A</span>

                        <button
                            type="button"
                            className="buy-btn"
                            disabled
                        >
                            N/A
                        </button>
                    </div>
                ) : (
                    poolPrices.map((poolItem, index) => {
                        const poolKey = String(poolItem.pool);
                        const isBuying = buyingPool === poolKey;

                        return (
                            <div
                                className={`pool-row ${
                                    index === 0 ? "cheapest-pool" : ""
                                }`}
                                key={poolKey}
                            >
                                <div className="pool-details">
                                    <span className="pool-name">
                                        Pool {poolItem.pool}

                                        {index === 0 && (
                                            <span className="cheapest-label">
                                                Cheapest
                                            </span>
                                        )}
                                    </span>

                                    <strong className="price">
                                        {formatNaira(poolItem.price)}
                                    </strong>
                                </div>

                                <button
                                    type="button"
                                    className="buy-btn"
                                    onClick={() => handleBuyClick(poolItem)}
                                    disabled={isDisabled}
                                >
                                    {isBuying ? "Buying..." : "Buy"}
                                </button>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default ServiceCard;
