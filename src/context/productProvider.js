import { useState } from "react";
import AppContext from "./appContext";
import localStorageServices from "@utils/localStorage.helper";
import data from "@data/mock_products_ads.json";

export const ProductProvider = ({ children }) => {
  const currentLocalProductAds = localStorageServices.getLocalStorage();
  const [currentProductsAds, setCurrentProductsAds] = useState(
    currentLocalProductAds ?? data,
  );

  const getProductsAdsByProductId = (productId) =>
    currentProductsAds.filter((p) => p.productId === Number(productId));

  const addProductAds = (item) => {
    const newCurrentProductsAds = [...currentProductsAds, item];
    setCurrentProductsAds(newCurrentProductsAds);
    localStorageServices.setLocalStorage(newCurrentProductsAds);
  };

  const removeProductAdsByProductIdAndAdsId = ({ productId, id }) => {
    setCurrentProductsAds([]);
    localStorageServices.setLocalStorage(currentProductsAds);
  };

  const stateValues = {
    getProductsAdsByProductId,
    addProductAds,
    removeProductAdsByProductIdAndAdsId,
  };

  return (
    <AppContext.Provider value={stateValues}>{children}</AppContext.Provider>
  );
};
