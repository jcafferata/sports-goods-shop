import { Link, useLocation, matchPath } from "react-router-dom";
import { HOME, PRODUCTS, PRODUCTS_DETAIL } from "@constants/routes";
import "./NavbarItems.css";

const HandleActive = (pathUrl) => {
  const { pathname } = useLocation();
  return !!matchPath({ path: pathUrl }, pathname) ? "navbarItems-active" : "";
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
      className={`${HandleActive(PRODUCTS)} ${HandleActive(PRODUCTS_DETAIL)}`}
      onClick={() => toggle && toggle(false)}
      to={PRODUCTS}
    >
      Products
    </Link>
  </div>
);

export default NavbarItems;
