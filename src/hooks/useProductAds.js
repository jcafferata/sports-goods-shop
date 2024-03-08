import { useContext } from "react";
import AppContext from "@context/appContext";

const useProductAds = () => {
  const { getProductsAdsByProductId } = useContext(AppContext);

  const getProductAds = (productId) => {
    return getProductsAdsByProductId(productId);
  };

  return { getProductAds };
};

export default useProductAds;
