import shopData from "@data/shop_products.json";

const getProducts = async () => {
  return shopData.products.map((prod, index) => {
    return {
      id: index + 1,
      name: prod.productName,
      description: prod.productDescription,
      image: prod.productImage,
      price: prod.price,
    };
  });
};

export default getProducts;
