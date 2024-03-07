import { useEffect, useState } from "react";
import getProducts from "@services/getProducts";

const useProduct = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProductList = async () => {
    const data = await getProducts();

    setProductList(data);
  };

  return {
    productList,
  };
};

export default useProduct;
