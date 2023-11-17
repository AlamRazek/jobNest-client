import Banner from "./Banner";
import { Helmet } from "react-helmet";
import JobsTable from "./JobsTable";
import { ToastContainer } from "react-toastify";

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
    </div>
  );
};

export default Home;
