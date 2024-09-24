// pages/Profile.js
import React from "react";
import Sidebar from "../components/SideBar";
import UserSuggestion from "../components/UserSuggestion";
import Card from "../components/Card";
import Button from "../components/Button";

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <Sidebar />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <Card>
            <div className="p-6">
              <div className="flex items-center mb-6">
                <img
                  src="https://api.dicebear.com/6.x/fun-emoji/svg?seed=Mario"
                  alt="Mario Avatar"
                  className="w-32 h-32 rounded-full mr-6"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-1">Mario</h3>
                  <p className="text-gray-600">@mario</p>
                </div>
              </div>
              <div className="mb-6">
                <h5 className="text-lg font-semibold mb-2">About:</h5>
                <p className="text-gray-700">
                  This book is a treatise on the theory of ethics, very popular
                  during the Renaissance. The first line of Lorem Ipsum, "Lorem
                  ipsum dolor sit amet..", comes from a line in section 1.10.32.
                </p>
              </div>
              <div className="flex space-x-4 mb-6">
                <span className="text-gray-600">
                  <i className="fas fa-user mr-1"></i> 120 Followers
                </span>
                <span className="text-gray-600">
                  <i className="fas fa-brain mr-1"></i> 2 Ideas
                </span>
                <span className="text-gray-600">
                  <i className="fas fa-comment mr-1"></i> 2 Comments
                </span>
              </div>
              <Button>Follow</Button>
            </div>
          </Card>
          <div className="mt-8">
            <Card>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src="https://api.dicebear.com/6.x/fun-emoji/svg?seed=Mario"
                      alt="Mario Avatar"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <h5 className="text-lg font-semibold">Mario</h5>
                  </div>
                </div>
                <p className="mb-4">
                  comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                  et Malorum" (The Extremes of Good and Evil) by Cicero, written
                  in 45 BC. This book is a treatise on the theory of ethics,
                  very popular during the Renaissance. The first line of Lorem
                  Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                  section 1.10.32.
                </p>
                <div className="flex justify-between items-center">
                  <button className="text-gray-600 hover:text-gray-800">
                    <i className="fas fa-heart mr-1"></i> 100
                  </button>
                  <span className="text-sm text-gray-500">
                    <i className="fas fa-clock mr-1"></i> 3-5-2023
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="w-full md:w-1/4 px-4">
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

export default Profile;
