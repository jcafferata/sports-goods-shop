import { useEffect, useState } from "react";
import AppContext from "./appContext";
import localStorageServices from "@utils/localStorage.helper";
import data from "@data/mock_products_ads.json";

export const ProductProvider = ({ children }) => {
  const currentLocalProductAds = localStorageServices.getLocalStorage();
  const [currentProductsAds, setCurrentProductsAds] = useState(
    currentLocalProductAds ?? [],
  );

  useEffect(() => {
    //mock population
    setCurrentProductsAds(data);
  }, []);

  const getProductsAdsByProductId = (productId) =>
    currentProductsAds.filter((p) => p.productId === Number(productId));

  const removeProductAdsByProductIdAndAdsId = ({ productId, id }) => {
    setCurrentProductsAds([]);
  };

  const stateValues = {
    getProductsAdsByProductId,
    removeProductAdsByProductIdAndAdsId,
  };

  return (
    <AppContext.Provider value={stateValues}>{children}</AppContext.Provider>
  );
};
