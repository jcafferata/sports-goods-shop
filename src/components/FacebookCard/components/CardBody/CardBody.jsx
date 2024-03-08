import "./CardBody.css";

const CardBody = ({ item }) => {
  const typeGallery = item.images.length === 1 ? "" : "cardBody__gallery-list";

  return (
    <div className="cardBody">
      <div className={`cardBody__gallery ${typeGallery}`}>
        {item.images &&
          item.images.map((img, index) => {
            return (
              <img src={img} alt={`${item.headline} gallery - item ${index}`} />
            );
          })}
      </div>
      <div className="cardBody__description">
        <div className="cardBody__description_body">
          <span className="cardBody__description_body-subtitle">
            sportsgoods.com
          </span>
          <span className="cardBody__description_body-title">
            {item.headline}
          </span>
          <span className="cardBody__description_body-description">
            {item.description}
          </span>
        </div>
        <div className="cardBody__description_button">
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
