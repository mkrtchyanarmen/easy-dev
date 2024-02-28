"use client";
import { Link, Button, Element, Events } from "react-scroll";

type NavLinkProps = {
  to: string;
  children: string;
};

const NavLink = ({ children, to }: NavLinkProps) => {
  return (
    <Link to={to} activeClass="" className="" offset={-64} smooth={true}>
      {children}
    </Link>
  );
};

export default NavLink;
