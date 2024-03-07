import Main from "@elements/Main";
import Header from "@elements/Header";
import Footer from "@elements/Footer";
import { Outlet } from "react-router-dom";
import BackToTop from "@components/elements/BackToTop";

const Layout = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
    <BackToTop />
  </>
);

export default Layout;
