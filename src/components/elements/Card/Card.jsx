import "./Card.css";

const Card = ({ children }) => (
  <section className="card">
    <div className="card__content">{children}</div>
  </section>
);

export default Card;
