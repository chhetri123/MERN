import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const userList = [
  {
    id: 1,
    name: "sushank",
    description: "Hello world",
  },
  {
    id: 2,
    name: "anika",
    description: "Learning React",
  },
  {
    id: 3,
    name: "rohan",
    description: "Frontend developer",
  },
  {
    id: 4,
    name: "meera",
    description: "Exploring backend",
  },
  {
    id: 5,
    name: "akash",
    description: "Building APIs",
  },
  {
    id: 6,
    name: "nina",
    description: "Designer and coder",
  },
  {
    id: 7,
    name: "vikram",
    description: "DevOps enthusiast",
  },
  {
    id: 8,
    name: "kavya",
    description: "Full-stack engineer",
  },
  {
    id: 9,
    name: "arjun",
    description: "Cloud computing geek",
  },
  {
    id: 10,
    name: "leela",
    description: "JavaScript ninja",
  },
];
export default function UserDetails() {
  const params = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userById = userList.find((user) => user.id === +params.id);
    console.log(userById);
    setUser(userById);
  }, []);

  return (
    <>
      {user === null ? (
        <p>User not found </p>
      ) : (
        <div className="w-1/2 mx-auto mt-8">
          <p>{user.name}</p>
          <p>{user.description}</p>
        </div>
      )}
    </>
  );
}
