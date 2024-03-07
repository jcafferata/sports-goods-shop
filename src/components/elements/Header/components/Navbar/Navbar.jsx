import Logo from "@components/elements/Logo";
import NavbarItems from "../NavbarItems";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__body">
        <Logo />
        <NavbarItems />
      </div>
    </nav>
  );
};

export default Navbar;
