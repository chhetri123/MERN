import React, { useState, useEffect } from "react";

const MotivationalQuote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const quotes = [
      "Don't watch the clock; do what it does. Keep going.",
      "The future depends on what you do today.",
      "Success is not the key to happiness. Happiness is the key to success.",
      "Believe you can and you're halfway there.",
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="mb-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
      <h2 className="text-xl font-semibold mb-4">Motivational Quote</h2>
      <p className="font-semibold">{quote}</p>
    </div>
  );
};

export default MotivationalQuote;
