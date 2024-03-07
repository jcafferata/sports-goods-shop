import logo from "@images/logo.png";
import { Link } from "react-router-dom";
import { NAME_PROJECT } from "@constants/config";
import { HOME } from "@constants/routes";
import "./Logo.css";

const Logo = () => (
  <div className="logo">
    <Link to={HOME}>
      <picture>
        {/* <source srcSet={logo.src} type="image/webp" /> */}
        <source srcSet={logo} type="image/png" />
        <img src={logo} alt={NAME_PROJECT} />
      </picture>
    </Link>
  </div>
);

export default Logo;
