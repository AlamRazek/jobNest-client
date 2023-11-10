import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Jobs from "./jobs";

const AllJobs = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/Jobs")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>All Jobs</title>
      </Helmet>
      {data?.map((jobs) => (
        <Jobs key={jobs._id} jobs={jobs}></Jobs>
      ))}
    </div>
  );
};

export default AllJobs;
