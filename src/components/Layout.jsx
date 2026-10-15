import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CartFeedback from "./CartFeedback";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <CartFeedback />
    </>
  );
}

export default Layout;
