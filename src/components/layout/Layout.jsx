import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Layout = () => {
  return (
    <div className="max-w-full mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
