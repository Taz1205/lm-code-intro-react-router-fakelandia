import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="flex space-x-8">
      <li>
        <Link className="underline hover:text-blue-500" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="underline hover:text-blue-500" to="misdemeanours">
          Misdemeanours
        </Link>
      </li>
      <li>
        <Link className="underline hover:text-blue-500" to="confession">
          Confess To Us
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
