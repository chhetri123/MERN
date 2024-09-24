import React from "react";
import Avatar from "./Avatar";
import Button from "./Button";

const UserSuggestion = ({ username, handle }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <Avatar seed={username} size="sm" className="mr-3" />
        <div>
          <h6 className="font-semibold">{username}</h6>
          <span className="text-sm text-gray-600">{handle}</span>
        </div>
      </div>
      <Button className="text-sm px-3 py-1">Follow</Button>
    </div>
  );
};

export default UserSuggestion;
