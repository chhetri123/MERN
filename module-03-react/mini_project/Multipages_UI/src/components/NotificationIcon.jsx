// components/NotificationIcon.js
import React, { useState } from "react";
import Notifications from "./Notifications";

const NotificationIcon = ({ notifications }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  const unreadCount = notifications.length;

  return (
    <div style={styles.container}>
      <div style={styles.iconContainer} onClick={handleIconClick}>
        <span style={styles.icon}>🔔</span>
        {unreadCount > 0 && <span style={styles.badge}>{unreadCount}</span>}
      </div>
      {isOpen && (
        <div style={styles.notificationsList}>
          <Notifications notifications={notifications} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
  },
  iconContainer: {
    cursor: "pointer",
    position: "relative",
    display: "inline-block",
  },
  icon: {
    fontSize: "24px",
  },
  badge: {
    position: "absolute",
    top: "-5px",
    right: "-5px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    padding: "5px",
    fontSize: "12px",
  },
  notificationsList: {
    position: "absolute",
    top: "30px",
    right: "0",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    width: "300px",
    maxHeight: "300px",
    overflowY: "auto",
    zIndex: 1000,
  },
};

export default NotificationIcon;
