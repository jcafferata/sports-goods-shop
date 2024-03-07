import Title from "@components/elements/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import Card from "@components/elements/Card";
import BoxCard from "@components/elements/BoxCard";
import useProduct from "@hooks/useProduct";
import TableProducts from "@components/TableProducts";

const Products = () => {
  const { productList } = useProduct();

  return (
    <BoxCard>
      <Card direction="column">
        <Title>
          <FontAwesomeIcon
            aria-label="Products"
            size="xs"
            icon={faBoxesStacked}
          />
          Products
        </Title>

        <TableProducts products={productList} />
      </Card>
    </BoxCard>
  );
};

export default Products;
