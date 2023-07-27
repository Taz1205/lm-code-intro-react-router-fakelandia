import { useMatch, Link } from "react-router-dom";
import { ReactNode, CSSProperties } from "react";

interface CustomNavLinkProps {
  to: string;
  children: ReactNode;
  activeStyle: CSSProperties;
  inactiveStyle: CSSProperties;
}

function CustomLink({
  to,
  children,
  activeStyle,
  inactiveStyle,
}: CustomNavLinkProps) {
  const match = useMatch({ path: to });

  return (
    <Link to={to} style={match ? activeStyle : inactiveStyle}>
      {children}
    </Link>
  );
}

const Nav = () => {
  const activeStyle = { color: "blue", textDecoration: "underline" };
  const inactiveStyle = { color: "black", textDecoration: "none" };

  return (
    <ul className="flex space-x-8">
      <li className="inline">
        <CustomLink
          to="/"
          activeStyle={activeStyle}
          inactiveStyle={inactiveStyle}
        >
          Home
        </CustomLink>
      </li>
      <li className="inline">
        <CustomLink
          to="/misdemeanours"
          activeStyle={activeStyle}
          inactiveStyle={inactiveStyle}
        >
          Misdemeanours
        </CustomLink>
      </li>
      <li className="inline">
        <CustomLink
          to="/confession"
          activeStyle={activeStyle}
          inactiveStyle={inactiveStyle}
        >
          Confession
        </CustomLink>
      </li>
    </ul>
  );
};

export default Nav;
