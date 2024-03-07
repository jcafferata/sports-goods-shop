import Title from "@components/elements/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleList } from "@fortawesome/free-solid-svg-icons";
import Card from "@components/elements/Card";
import BoxCard from "@components/elements/BoxCard";
import { useParams } from "react-router";
import { PRODUCTS } from "@constants/routes";
import Breadcrumb from "@components/elements/Breadcrumb";

const ProductDetail = () => {
  let { slug } = useParams();

  return (
    <BoxCard>
      <Card>
        <Breadcrumb to={PRODUCTS} title="Back to products" />
        <Title>
          <FontAwesomeIcon
            aria-label="Products"
            size="xs"
            icon={faRectangleList}
          />
          {slug}
        </Title>
      </Card>
    </BoxCard>
  );
};

export default ProductDetail;
