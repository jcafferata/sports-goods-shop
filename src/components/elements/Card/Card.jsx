import "./Card.css";

const directionMap = {
  row: "card__content-row",
  column: "card__content-column",
};

const Card = ({ direction = "row", children }) => (
  <section className="card">
    <div className={`card__content ${directionMap[direction]}`}>{children}</div>
  </section>
);

export default Card;
