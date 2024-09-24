// components/IdeaCard.js
import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import Button from "./Button";

const IdeaCard = ({ author, content, likes, date, onLike, onComment }) => {
  return (
    <Card className="mb-6">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Avatar seed={author} size="md" className="mr-4" />
          <h5 className="text-lg font-semibold">{author}</h5>
        </div>
        <p className="mb-4">{content}</p>
        <div className="flex justify-between items-center mb-4">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onLike}
          >
            <i className="fas fa-heart mr-1"></i> {likes}
          </button>
          <span className="text-sm text-gray-500">
            <i className="fas fa-clock mr-1"></i> {date}
          </span>
        </div>
        <div className="mt-4">
          <textarea
            className="w-full p-2 border rounded-md mb-2"
            rows="2"
            placeholder="Add a comment..."
          ></textarea>
          <Button onClick={onComment} className="text-sm">
            Post Comment
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default IdeaCard;
