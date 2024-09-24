// components/Notifications.js
import React from "react";

const Notifications = ({ notifications }) => {
  return (
    <div>
      {notifications.length === 0 ? (
        <div style={styles.empty}>No notifications</div>
      ) : (
        notifications.map((notification) => (
          <div key={notification.id} style={styles.notification}>
            {notification.message}
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  notification: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  empty: {
    padding: "10px",
    textAlign: "center",
    color: "#888",
  },
};

export default Notifications;
