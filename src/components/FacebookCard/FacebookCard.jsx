import CardHeader from "./components/CardHeader";
import CardFooter from "./components/CardFooter";
import CardBody from "./components/CardBody";
import CardDescription from "./components/CardDescription";
import "./FacebookCard.css";

const FacebookCard = ({ item }) => (
  <article className="facebookCard">
    <CardHeader />
    <CardDescription description={item.headline} />
    <CardBody item={item} />
    <CardFooter />
  </article>
);

export default FacebookCard;
