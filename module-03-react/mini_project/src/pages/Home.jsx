import React, { useEffect, useState } from "react";
import WelcomeMessage from "./../components/Home/WelcomeMessage";
import MotivationalQuote from "./../components/Home/MotivationQuotes";
import TaskSummary from "./../components/Home/TaskSummary";
import { getTask } from "../utils/localTask";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const storedTasks = getTask();
    setTasks(storedTasks);
  }, []);
  return (
    <>
      <WelcomeMessage />
      <MotivationalQuote />
      <TaskSummary tasks={tasks} />
    </>
  );
};

export default Home;
