import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import "./CardFooter.css";

const CardFooter = () => (
  <div className="cardFooter">
    <button>
      <FontAwesomeIcon aria-label="Like" icon={faThumbsUp} /> Like
    </button>
    <button>
      <FontAwesomeIcon aria-label="Comment" icon={faComment} />
      Comment
    </button>
    <button>
      <FontAwesomeIcon aria-label="Share" icon={faShare} /> Share
    </button>
  </div>
);

export default CardFooter;
