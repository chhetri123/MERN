// pages/Home.js
import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import Card from "../components/Card";
import Button from "../components/Button";
import IdeaCard from "../components/IdeaCard";
import InputField from "../components/InputField";
import UserSuggestion from "../components/UserSuggestion";
import IdeaInput from "../components/IdeaInput";

const Home = () => {
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      author: "Mario",
      content:
        "comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
      likes: 100,
      date: "3-5-2023",
    },
  ]);

  const handleNewIdea = (content) => {
    const newIdea = {
      id: ideas.length + 1,
      author: "Current User", // This should be replaced with the actual logged-in user
      content,
      likes: 0,
      date: new Date().toLocaleDateString(),
    };
    setIdeas([newIdea, ...ideas]);
  };

  const handleLike = (id) => {
    setIdeas(
      ideas.map((idea) =>
        idea.id === id ? { ...idea, likes: idea.likes + 1 } : idea
      )
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <Sidebar />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <div
            className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6"
            role="alert"
          >
            Idea created Successfully
          </div>
          <IdeaInput onSubmit={handleNewIdea} />
          <div className="mt-8">
            {ideas.map((idea) => (
              <IdeaCard
                key={idea.id}
                author={idea.author}
                content={idea.content}
                likes={idea.likes}
                date={idea.date}
                onLike={() => handleLike(idea.id)}
                onComment={() =>
                  console.log("Comment functionality to be implemented")
                }
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/4 px-4">
          <Card className="mb-8">
            <div className="p-4">
              <h5 className="text-lg font-semibold mb-4">Search</h5>
              <InputField type="text" id="search" placeholder="Search..." />
            </div>
          </Card>
          <Card>
            <div className="p-4">
              <h5 className="text-lg font-semibold mb-4">Who to follow</h5>
              <UserSuggestion username="Luigi" handle="@Luigi" />
              <UserSuggestion username="Peach" handle="@Peach" />
              <div className="mt-4">
                <Button className="w-full text-sm">Show More</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
