import { io } from "socket.io-client";
import LoginPage from "./Login";
import { useEffect, useState } from "react";

function App() {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [messageUser, setMessageUser] = useState();
  const [messageData, setMessageData] = useState("");

  const [messageList, setMessageList] = useState([]);

  const userToken = localStorage.getItem("user_auth_token");
  const socket = io("http://localhost:4040", {
    extraHeaders: {
      Authorization: userToken,
    },
  });

  useEffect(() => {
    socket.connect();
    socket.on("joined", (joinedUserDetails) => {
      console.log(joinedUserDetails);
    });
    socket.on("online-users-list", (userList) => {
      setOnlineUsers(userList);
    });

    socket.on("msg", (chatMessage) => {
      setMessageList((prev) => {
        return [chatMessage, ...prev];
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const viewOnlineUsers = () => {
    socket.emit("online-users");
  };

  const handleChatInterface = (key) => {
    setMessageUser(onlineUsers[key]);
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      socket.emit("msg", {
        room: messageUser._id,
        msg: messageData,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={viewOnlineUsers}>View Online Users</button>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {Object.entries(onlineUsers).map(([key, value]) => (
          <button onClick={() => handleChatInterface(key)} key={key}>
            {value.fullname}
          </button>
        ))}
      </div>

      {messageUser ? (
        <form
          style={{
            border: "1px solid black",
            padding: "1rem",
            margin: "4rem 0rem",
          }}
          onSubmit={handleSubmit}
        >
          {messageList.map((currentMsg, index) => (
            <div key={index}>
              <p>{currentMsg}</p>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
          ))}
          <input
            type="text"
            style={{ width: "100%", padding: "10px" }}
            value={messageData}
            onChange={(e) => setMessageData(e.target.value)}
            placeholder={`Chat with user ${messageUser.fullname}`}
          />
          <button style={{ padding: "10px" }}>Send</button>
        </form>
      ) : null}
      <LoginPage />
    </div>
  );
}

export default App;
