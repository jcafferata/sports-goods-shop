import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HOME, PRODUCTS, PRODUCTS_DETAIL } from "@constants/routes";
import Layout from "@components/Layout";
import Error404 from "@pages/Error404";
import Home from "@pages/Home";
import ProductDetail from "@pages/ProductDetail";
import Products from "@pages/Products";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={PRODUCTS} element={<Products />} />
        <Route path={PRODUCTS_DETAIL} element={<ProductDetail />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

export default App;
