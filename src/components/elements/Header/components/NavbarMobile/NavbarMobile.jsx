import NavbarItems from "../NavbarItems";
import { useState } from "react";
import Logo from "@components/elements/Logo";
import Hamburger from "./components/Hamburger";
import "./NavbarMobile.css";

const NavbarMobile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="navbarMobile">
      <div className="navbarMobile__body">
        <div className="navbarMobile__body__menu">
          <Logo />
          <div className="navbarMobile__body__menu-buttom">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>

        {isOpen && (
          <div className="navbarMobile__body__container">
            <NavbarItems toggle={setOpen} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarMobile;
