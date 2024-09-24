import React from "react";

const Avatar = ({ seed, size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-32 h-32",
  };

  return (
    <img
      src={`https://api.dicebear.com/6.x/fun-emoji/svg?seed=${seed}`}
      alt={`${seed} Avatar`}
      className={`rounded-full ${sizeClasses[size]} ${className}`}
    />
  );
};

export default Avatar;
