import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link to={"/"}>Homepage</Link>
      </li>
      <li>
        <Link to={"/event"}>Event</Link>
      </li>
    </ul>
  );
}
