import "./FacebookCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-regular-svg-icons";
import { faShare, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import fbLogo from "@images/facebook.png";

const FacebookCard = () => (
  <article className="facebookCard">
    <div className="facebookCard__header">
      <div className="facebookCard__header__logo">
        <img src={fbLogo} alt="facebook" />
      </div>
      <div className="facebookCard__header__title">
        <span className="facebookCard__header__title-company">
          sportsgoods.com
        </span>
        <span className="facebookCard__header__title-sponsored">
          Sponsored ·{" "}
          <FontAwesomeIcon
            aria-label="world"
            size="xs"
            icon={faEarthAmericas}
          />
        </span>
      </div>
    </div>
    <div className="facebookCard__description">
      this is a description of the ads!
    </div>
    <div className="facebookCard__content">
      <div className="facebookCard__content__gallery"></div>
      <div className="facebookCard__content__description">
        <div className="facebookCard__content__body">
          <span className="facebookCard__content__body-subtitle">
            sportsgoods.com
          </span>
          <span className="facebookCard__content__body-title">
            this is a description of the ads!
          </span>
          <span className="facebookCard__content__body-description">
            text text text text text text text text text text text text text
            text text text text text text text
          </span>
        </div>
        <div className="facebookCard__content__button">
          <button>Download</button>
        </div>
      </div>
    </div>
    <div className="facebookCard__actions">
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
  </article>
);

export default FacebookCard;
