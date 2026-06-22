// import React, { useEffect, useState, useMemo } from "react";
// import axios from "axios";
// import "../styles/order-history.css";

// const ORDERS_PER_PAGE = 10;

// const LogsHistory = ({ darkMode }) => {
//   const [logs, setLogs] = useState([]);
//   const [loadingPage, setLoadingPage] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [platformFilter, setPlatformFilter] = useState("all");

//   const API_URL = process.env.REACT_APP_API_URL;

//   /* ================================
//      FETCH ORDER HISTORY (USER)
//   ================================ */
//   useEffect(() => {
//     document.title = "Logs History - RealSMS";

//     const fetchLogs = async () => {
//       const token = localStorage.getItem("token"); // ✅ correct key
//       if (!token) {
//         console.error("No user token found. Please log in.");
//         setLogs([]);
//         setLoadingPage(false);
//         return;
//       }

//       try {
//         setLoadingPage(true);
//         // Set Axios default Authorization header
//         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//         const res = await axios.get(`${API_URL}/api/log/orders`);

//         if (res.data?.data) {
//           setLogs(res.data.data);
//         } else {
//           console.error("Failed to fetch logs:", res.data);
//         }
//       } catch (err) {
//         if (err.response?.status === 401) {
//           console.error("Unauthorized request. Please log in again.");
//         } else {
//           console.error("Error fetching logs:", err);
//         }
//         setLogs([]);
//       } finally {
//         setLoadingPage(false);
//       }
//     };

//     fetchLogs();
//   }, [API_URL]);

//   /* ================================
//      NORMALIZE STRING
//   ================================ */
//   const normalize = (str) => str?.toLowerCase().replace(/\s+/g, "");

//   /* ================================
//      FILTER LOGS
//   ================================ */
//   const filteredLogs = useMemo(() => {
//     if (platformFilter === "all") return logs;

//     return logs.filter(
//       (log) => normalize(log.platform) === normalize(platformFilter)
//     );
//   }, [logs, platformFilter]);

//   /* ================================
//      PAGINATION
//   ================================ */
//   const totalPages = Math.ceil(filteredLogs.length / ORDERS_PER_PAGE);

//   const paginatedLogs = filteredLogs.slice(
//     (currentPage - 1) * ORDERS_PER_PAGE,
//     currentPage * ORDERS_PER_PAGE
//   );

//   const changePage = (page) => {
//     if (page < 1 || page > totalPages) return;
//     setCurrentPage(page);
//   };

//   /* ================================
//      FORMAT DATE
//   ================================ */
//   const formatDate = (date) => (date ? new Date(date).toLocaleString() : "-");

//   /* ================================
//      TRUNCATE DETAILS
//   ================================ */
//   const truncateLines = (text, maxLines = 2, maxCharsPerLine = 40) => {
//     if (!text) return "-";

//     const lines = text.split("\n");
//     const truncated = lines.slice(0, maxLines).map((line) =>
//       line.length > maxCharsPerLine ? line.slice(0, maxCharsPerLine) + "..." : line
//     );

//     if (lines.length > maxLines) truncated.push("...");
//     return truncated.join("\n");
//   };

//   /* ================================
//      COPY TO CLIPBOARD
//   ================================ */
//   const copyToClipboard = (text) => {
//     navigator.clipboard
//       .writeText(text)
//       .then(() => alert("Copied!"))
//       .catch(() => alert("Failed to copy"));
//   };

//   return (
//     <div className={`order-history-page ${darkMode ? "dark" : ""}`}>
//       <div className="order-history-card">
//         <h2 className="order-history-title">Logs History</h2>

//         {/* FILTER */}
//         <div className="order-filter">
//           <select
//             value={platformFilter}
//             onChange={(e) => {
//               setPlatformFilter(e.target.value);
//               setCurrentPage(1);
//             }}
//           >
//             <option value="all">All Platforms</option>
//             <option value="instagram">Instagram</option>
//             <option value="facebook">Facebook</option>
//             <option value="twitter">Twitter</option>
//             <option value="tiktok">TikTok</option>
//             <option value="mail">Mail</option>
//             <option value="google voice">Google Voice</option>
//             <option value="netflix">Netflix</option>
//             <option value="texting app">Texting App</option>
//             <option value="vpn">VPN</option>
//           </select>
//         </div>

//         {loadingPage ? (
//           <div className="loading-spinner">
//             <div className={`spinner ${darkMode ? "dark" : ""}`}></div>
//             <p>Loading logs...</p>
//           </div>
//         ) : filteredLogs.length === 0 ? (
//           <p className="no-orders">No logs found.</p>
//         ) : (
//           <>
//             <div className="order-table-scroll">
//               <table className="order-history-table">
//                 <thead>
//                   <tr>
//                     <th>Date</th>
//                     <th>Platform</th>
//                     <th>Product</th>
//                     <th>Price</th>
//                     <th>Quantity</th>
//                     <th>Details</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {paginatedLogs.map((log) => (
//                     <tr key={log._id}>
//                       <td data-label="Date">{formatDate(log.createdAt)}</td>
//                       <td data-label="Platform">{log.platform || "-"}</td>
//                       <td data-label="Product">{log.product || log.name || "-"}</td>
//                       <td data-label="Price">₦{log.price?.toLocaleString() || "0"}</td>
//                       <td data-label="Quantity">{log.quantity || "-"}</td>
//                       <td data-label="Details">
//                         <div className="details-box">
//                           <pre className="details-text">{truncateLines(log.details)}</pre>
//                           <button
//                             className="copy-btn"
//                             onClick={() => copyToClipboard(log.details)}
//                           >
//                             Copy
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* PAGINATION */}
//             {totalPages > 1 && (
//               <div className="pagination">
//                 <button
//                   onClick={() => changePage(currentPage - 1)}
//                   disabled={currentPage === 1}
//                 >
//                   Prev
//                 </button>
//                 <span>
//                   Page {currentPage} of {totalPages}
//                 </span>
//                 <button
//                   onClick={() => changePage(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                 >
//                   Next
//                 </button>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LogsHistory;


import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import "../styles/order-history.css";

const ORDERS_PER_PAGE = 10;
const API_URL = process.env.REACT_APP_API_URL;

const LogsHistory = ({ darkMode }) => {
  const [logs, setLogs] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [platformFilter, setPlatformFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "Logs History - RealSMS";
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoadingPage(false);
      return;
    }

    try {
      const res = await axios.get(`${API_URL}/api/log/orders`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data?.data) {
        setLogs(res.data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingPage(false);
    }
  };

  const normalize = (str) => str?.toLowerCase().replace(/\s+/g, "");

  const filteredLogs = useMemo(() => {
    let filtered = logs;

    if (searchTerm.trim()) {
      const query = searchTerm.toLowerCase();

      filtered = filtered.filter((log) => {
        const platform = log.platform?.toLowerCase() || "";
        const product = (log.product || log.name || "").toLowerCase();
        const details = log.details?.toLowerCase() || "";

        return (
          platform.includes(query) ||
          product.includes(query) ||
          details.includes(query)
        );
      });
    }

    if (platformFilter !== "all") {
      filtered = filtered.filter(
        (log) => normalize(log.platform) === normalize(platformFilter)
      );
    }

    return filtered;
  }, [logs, platformFilter, searchTerm]);

  const totalPages = Math.ceil(filteredLogs.length / ORDERS_PER_PAGE);

  const paginatedLogs = filteredLogs.slice(
    (currentPage - 1) * ORDERS_PER_PAGE,
    currentPage * ORDERS_PER_PAGE
  );

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const formatDate = (date) => {
    if (!date) return { formattedDate: "-", relativeTime: "-" };

    const created = new Date(date);
    const now = new Date();

    const diffMs = now - created;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    let relativeTime = "";

    if (diffMins < 1) relativeTime = "Just now";
    else if (diffMins < 60) relativeTime = `${diffMins} mins ago`;
    else if (diffHours < 24) relativeTime = `${diffHours} hrs ago`;
    else relativeTime = `${diffDays} days ago`;

    return {
      formattedDate: created.toLocaleDateString(),
      relativeTime,
    };
  };

  const truncateLines = (text, max = 40) => {
    if (!text) return "-";
    return text.length > max ? text.slice(0, max) + "..." : text;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text || "");
    alert("Copied!");
  };

  return (
    <div className={`order-history-page ${darkMode ? "dark" : ""}`}>
      <div className="history-header">
        <h1>Logs History</h1>
        <p>View all purchased logs and account details</p>
      </div>

      <div className="history-filters">
        <div className="history-search">
          <input
            type="text"
            placeholder="Search logs..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <select
          value={platformFilter}
          onChange={(e) => {
            setPlatformFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="all">All Platforms</option>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
          <option value="twitter">Twitter</option>
          <option value="tiktok">TikTok</option>
          <option value="mail">Mail</option>
          <option value="google voice">Google Voice</option>
          <option value="netflix">Netflix</option>
          <option value="texting app">Texting App</option>
          <option value="vpn">VPN</option>
        </select>
      </div>

      {loadingPage ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading logs...</p>
        </div>
      ) : filteredLogs.length === 0 ? (
        <div className="no-orders">
          <div className="no-orders-icon">📄</div>
          <h3>No Logs Found</h3>
          <p>No logs match your current filter.</p>
        </div>
      ) : (
        <>
          <div className="desktop-view">
            <div className="order-table-scroll">
              <table className="order-history-table">
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Date & Time</th>
                    <th>Details</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedLogs.map((log) => {
                    const dateInfo = formatDate(log.createdAt);

                    return (
                      <tr key={log._id}>
                        <td>{log.platform || "-"}</td>
                        <td>{log.product || log.name || "-"}</td>
                        <td>₦{log.price?.toLocaleString() || 0}</td>
                        <td>{log.quantity || "-"}</td>

                        <td>
                          <div className="date-cell">
                            <span className="main-date">
                              {dateInfo.formattedDate}
                            </span>
                            <span className="relative-time">
                              {dateInfo.relativeTime}
                            </span>
                          </div>
                        </td>

                        <td>
                          <button
                            className="resend-btn"
                            onClick={() => copyToClipboard(log.details)}
                          >
                            Copy Details
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mobile-view">
            <div className="timeline-list">
              {paginatedLogs.map((log) => (
                <div className="timeline-card" key={log._id}>
                  <div className="timeline-dot received"></div>

                  <div className="timeline-content">
                    <div className="timeline-top">
                      <h3>{log.platform}</h3>
                    </div>

                    <p className="timeline-number">
                      {log.product || log.name}
                    </p>

                    <p className="timeline-country">
                      ₦{log.price?.toLocaleString() || 0}
                    </p>

                    <p className="timeline-otp">
                      {truncateLines(log.details)}
                    </p>

                    <div className="timeline-bottom">
                      <span>
                        {formatDate(log.createdAt).relativeTime}
                      </span>

                      <button
                        className="resend-btn"
                        onClick={() => copyToClipboard(log.details)}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <p>
                Showing {(currentPage - 1) * ORDERS_PER_PAGE + 1} to{" "}
                {Math.min(
                  currentPage * ORDERS_PER_PAGE,
                  filteredLogs.length
                )}{" "}
                of {filteredLogs.length} results
              </p>

              <div className="page-buttons">
                <button
                  onClick={() => changePage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>

                <button className="active">{currentPage}</button>

                <button
                  onClick={() => changePage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LogsHistory;
