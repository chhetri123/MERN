// components/Card.js
import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow ${className}`}>
      {children}
    </div>
  );
};

export default Card;
