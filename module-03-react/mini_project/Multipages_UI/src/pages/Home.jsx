import React, { useEffect, useState } from "react";
import WelcomeMessage from "../components/Home/WelcomeMessage";
import MotivationalQuote from "../components/Home/MotivationQuotes";
import Summary from "../components/Home/Summary";
import { getData } from "../utils/localData";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Connect to socket server 3000
    const storedTasks = getData("tasks");
    const storedUsers = getData("users");
    setTasks(storedTasks);
    setUsers(storedUsers);
  }, []);
  return (
    <>
      <WelcomeMessage />
      <MotivationalQuote />
      <Summary tasks={tasks} users={users} />
    </>
  );
};

export default Home;
