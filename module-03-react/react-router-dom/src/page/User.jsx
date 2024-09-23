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
import { Link } from "react-router-dom";
export default function User() {
  return (
    <div className="w-1/2 mx-auto mt-5">
      <ul>
        {userList.map((user) => (
          <li>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
