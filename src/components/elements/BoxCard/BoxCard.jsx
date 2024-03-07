import "./BoxCard.css";

const BoxCard = ({ children }) => (
  <section className="boxCard">
    <div className="boxCard__content">{children}</div>
  </section>
);

export default BoxCard;
