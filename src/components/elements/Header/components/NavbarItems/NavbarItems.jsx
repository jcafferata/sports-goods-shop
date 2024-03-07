import { Link, useLocation } from "react-router-dom";
import { HOME, PRODUCTS } from "@constants/routes";
import "./NavbarItems.css";

const HandleActive = (path) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return pathname === path ? "navbarItems-active" : "";
};

const NavbarItems = ({ toggle }) => (
  <div className="navbarItems">
    <Link
      className={HandleActive(HOME)}
      onClick={() => toggle && toggle(false)}
      to={HOME}
    >
      Home
    </Link>
    <Link
      className={HandleActive(PRODUCTS)}
      onClick={() => toggle && toggle(false)}
      to={PRODUCTS}
    >
      Products
    </Link>
  </div>
);

export default NavbarItems;
