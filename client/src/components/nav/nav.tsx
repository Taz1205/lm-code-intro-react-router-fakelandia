import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li className="inline space-x-4">
        <Link className="text-yellow-500 underline flex space-x-4" to="/">
          Home
        </Link>
      </li>
      <li className="inline space-x-4">
        <Link
          className="text-yellow-500 underline flex space-x-4"
          to="misdemeanours"
        >
          Misdemeanours
        </Link>
      </li>
      <li className="inline space-x-4">
        <Link
          className="text-yellow-500 underline flex space-x-4"
          to="confession"
        >
          Confess To Us
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
