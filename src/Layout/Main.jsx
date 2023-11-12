import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto my-2">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Main;
