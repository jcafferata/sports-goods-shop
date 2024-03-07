import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ButtonIcon.css";

const ButtonIcon = ({ icon, title, size, onClick }) => (
  <button className="button" title="New Advertisement" onClick={onClick}>
    <FontAwesomeIcon aria-label={title} size={size} icon={icon} />
  </button>
);

export default ButtonIcon;
