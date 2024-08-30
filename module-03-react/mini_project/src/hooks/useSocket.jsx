import { useEffect, useState } from "react";
import io from "socket.io-client";

const useSocket = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:8000"); // Adjust the URL to match your server

    // Listen for country changes
    socket.on("countryChange", ({ action, country }) => {
      console.log(country);
      const message = `${country.userName} just ${
        action === "add" ? "added" : action === "update" ? "updated" : "deleted"
      } a Country "${country.name}"`;
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        { message, id: country._id },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return notifications;
};

export default useSocket;
