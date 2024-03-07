import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Hamburger.css";

const Hamburger = ({ toggled, toggle }) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a href="#" className="hamburger" onClick={() => toggle(!toggled)}>
    {toggled ? (
      <FontAwesomeIcon className="hamburger-icon" icon={faXmark} />
    ) : (
      <FontAwesomeIcon className="hamburger-icon" icon={faBars} />
    )}
  </a>
);

export default Hamburger;
