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
import Modal from "@components/elements/Modal";
import FormAds from "@components/FormAds";
import useFormProductAds from "@hooks/useFormProductAds";

const ProductDetail = () => {
  let { id, slug } = useParams();
  const { getProductAds } = useProductAds();
  const { openModal, setOpenModal, handleSaveForm, handleSubmit } =
    useFormProductAds(id);
  const listAds = getProductAds(id);

  return (
    <BoxCard>
      <Modal openModal={openModal} closeModal={() => setOpenModal(false)}>
        <FormAds
          handleSaveForm={handleSaveForm}
          handleSubmit={handleSubmit}
          productName={slug}
          title="Product Ads | Create"
        />
      </Modal>
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
            onClick={() => setOpenModal(true)}
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
