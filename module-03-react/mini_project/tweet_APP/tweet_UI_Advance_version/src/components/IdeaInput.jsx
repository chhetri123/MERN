import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";

const IdeaInput = ({ onSubmit }) => {
  const [idea, setIdea] = useState("");

  const handleSubmit = () => {
    if (idea.trim()) {
      onSubmit(idea);
      setIdea("");
    }
  };

  return (
    <Card className="mb-6">
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-4">Share your ideas</h4>
        <textarea
          className="w-full p-2 border rounded-md mb-4"
          rows="4"
          placeholder="What's on your mind?"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        ></textarea>
        <Button onClick={handleSubmit}>Share</Button>
      </div>
    </Card>
  );
};

export default IdeaInput;
