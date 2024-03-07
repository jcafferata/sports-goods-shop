import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ to, title }) => (
  <Link className="breadcrumb" to={to} title={title}>
    <FontAwesomeIcon aria-label="Back" size="xs" icon={faCircleArrowLeft} />
    {title}
  </Link>
);

export default Breadcrumb;
