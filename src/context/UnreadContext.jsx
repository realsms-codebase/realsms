// // context/UnreadContext.jsx
// import React, { createContext, useState, useContext } from "react";

// const UnreadContext = createContext();

// export const useUnread = () => useContext(UnreadContext);

// export const UnreadProvider = ({ children }) => {
//   const [unreadMessages, setUnreadMessages] = useState(0);
//   return (
//     <UnreadContext.Provider value={{ unreadMessages, setUnreadMessages }}>
//       {children}
//     </UnreadContext.Provider>
//   );
// };

import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const UnreadContext = createContext();

export const useUnread = () => useContext(UnreadContext);

export const UnreadProvider = ({ children }) => {
  const [unreadMessages, setUnreadMessages] = useState(0);

  const fetchUnread = async () => {
    try {
      const res = await axios.get("/api/messages/unread-count");
      setUnreadMessages(res.data.count);
    } catch (err) {
      console.error("Failed to fetch unread count");
    }
  };

  useEffect(() => {
    fetchUnread(); // initial load

    const interval = setInterval(() => {
      fetchUnread();
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <UnreadContext.Provider value={{ unreadMessages, setUnreadMessages, fetchUnread }}>
      {children}
    </UnreadContext.Provider>
  );
};
