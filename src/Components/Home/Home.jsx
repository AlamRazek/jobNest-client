import Banner from "./Banner";
import { Helmet } from "react-helmet";
import JobsTable from "./JobsTable";
import { ToastContainer } from "react-toastify";
import Swipper from "../Swipper/Swipper";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home </title>
      </Helmet>
      <Banner></Banner>
      <div>
        <JobsTable></JobsTable>
      </div>
      <div className="my-4 lg:my-6">
        <AboutUs></AboutUs>
      </div>
      <Swipper></Swipper>
    </div>
  );
};

export default Home;
