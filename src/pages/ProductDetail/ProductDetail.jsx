import Title from "@components/elements/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRectangleList,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import Card from "@components/elements/Card";
import BoxCard from "@components/elements/BoxCard";
import { useParams } from "react-router";
import { PRODUCTS } from "@constants/routes";
import Breadcrumb from "@components/elements/Breadcrumb";
import ButtonIcon from "@components/elements/ButtonIcon";
import "./ProductDetail.css";
import FacebookCard from "@components/FacebookCard";
import useProductAds from "@hooks/useProductAds";

const ProductDetail = () => {
  let { id, slug } = useParams();
  const { getProductAds } = useProductAds();
  const listAds = getProductAds(id);

  return (
    <BoxCard>
      <Card>
        <div>
          <Breadcrumb to={PRODUCTS} title="Back to products" />
          <Title>
            <FontAwesomeIcon
              aria-label="Products"
              size="xs"
              icon={faRectangleList}
            />
            {slug}
          </Title>
        </div>
        <div className="buttons">
          <ButtonIcon
            title="New Advertisement"
            icon={faCirclePlus}
            size="3x"
            onClick={() => {}}
          />
        </div>
      </Card>

      <div className="adsList">
        {listAds &&
          listAds.map((item) => {
            return <FacebookCard item={item} key={item.id} />;
          })}
      </div>
    </BoxCard>
  );
};

export default ProductDetail;
