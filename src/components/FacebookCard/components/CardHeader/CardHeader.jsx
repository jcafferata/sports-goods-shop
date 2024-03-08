import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import fbLogo from "@images/facebook.png";
import "./CardHeader.css";

const CardHeader = () => (
  <div className="cardHeader">
    <div className="cardHeader__logo">
      <img src={fbLogo} alt="facebook" />
    </div>
    <div className="cardHeader__title">
      <span className="cardHeader__title_company">sportsgoods.com</span>
      <span className="cardHeader__title_sponsored">
        Sponsored ·{" "}
        <FontAwesomeIcon aria-label="world" size="xs" icon={faEarthAmericas} />
      </span>
    </div>
  </div>
);

export default CardHeader;
