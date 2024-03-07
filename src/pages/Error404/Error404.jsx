import { HOME } from "@constants/routes";
import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => (
  <div className="notfound">
    <div className="notfound-404">
      <h1>Oops!</h1>
      <h2>404 - The Page can't be found</h2>
    </div>
    <Link to={HOME}>Go to Homepage</Link>
  </div>
);

export default Error404;
