import UserProfile from "../components/UserProfile";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = ({ token, user: currentUser }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(
          "http://localhost:8070/api/users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(userResponse.data.users);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center"> User Profile</h1>
      <div className="mt-7 flex gap-6 flex-wrap justify-center">
        {users.map((user) => (
          <UserProfile currentUser={currentUser} key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};
export default Home;
