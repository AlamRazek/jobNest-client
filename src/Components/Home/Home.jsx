import Banner from "./Banner";
import { Helmet } from "react-helmet";
import JobsTable from "./JobsTable";
import { ToastContainer } from "react-toastify";
import Swipper from "../Swipper/Swipper";

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
      <Swipper></Swipper>
    </div>
  );
};

export default Home;
