import Title from "@components/elements/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import Card from "@components/elements/Card";
import BoxCard from "@components/elements/BoxCard";

const Products = () => (
  <BoxCard>
    <Card>
      <Title>
        <FontAwesomeIcon size="xs" icon={faBoxesStacked} />
        Products
      </Title>
    </Card>
  </BoxCard>
);

export default Products;
