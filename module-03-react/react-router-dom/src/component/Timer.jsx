import { useEffect, useState } from "react";

const Timer = () => {
  const [active, setActive] = useState(false);
  const [timer, setTimer] = useState(0);
  //   const [test, setTest] = useState(true);
  const handleStart = () => {
    setActive(true);
  };
  const handleStop = () => {
    setActive(false);
  };
  const handleReset = () => {
    setTimer(0);
    setActive(false);
  };
  useEffect(() => {
    if (active) {
      const timer = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [active, timer]);

  //   //
  //   useEffect(() => {
  //     console.log("Test");
  //   }, [test]);

  //
  return (
    <>
      <div className="flex flex-col items-center p-4 space-y-4">
        <p className="text-xl font-bold">Timer: {timer}s</p>
        <div className="space-x-4">
          <button
            onClick={handleStart}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Start
          </button>
          <button
            onClick={handleStop}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Stop
          </button>
        </div>
      </div>
    </>
  );
};

export default Timer;
