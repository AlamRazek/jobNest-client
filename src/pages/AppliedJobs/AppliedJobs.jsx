import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import AppliedJobsCart from "./appliedJobsCart";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();
  const [filterData, setFilterData] = useState(data);

  useState(() => {
    axios
      .get(`http://localhost:5000/appliedJobs/${user.displayName}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setFilterData(res.data);
      });
  }, []);

  const handleTab = (e) => {
    const tabIndex = e.target.value;
    if (tabIndex == "all") {
      // All Jobs
      setFilterData(data);
    } else if (tabIndex == "onSite") {
      // On Site Jobs
      setFilterData(data.filter((job) => job.radio == "On-Site"));
    } else if (tabIndex == "Hybrid") {
      // Remote Jobs
      setFilterData(data.filter((job) => job.radio == "Hybrid"));
    } else if (tabIndex == "remote") {
      // Hybrid Jobs
      setFilterData(data.filter((job) => job.radio == "Remote"));
    } else if (tabIndex == "partTime") {
      // Part Time Jobs
      setFilterData(data.filter((job) => job.radio == "Part-Time"));
    }
  };

  return (
    <div>
      <Helmet>
        <title>Applied Jobs</title>
      </Helmet>
      <div className="w-full max-w-xs">
        <select
          className="select select-bordered w-full max-w-[220px] appearance-none bg-white border border-gray-300 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 mb-4 lg:mb-8"
          onChange={handleTab}
        >
          <option value="all">All</option>
          <option value="onSite">On-Site</option>
          <option value="remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="partTime">Part-Time</option>
        </select>
      </div>
      <div className="grid grid-cols-3 mx-auto gap-4 p-4">
        {filterData?.map((jobs) => (
          <AppliedJobsCart
            key={jobs._id}
            jobs={jobs}
            data={data}
            filterData={filterData}
            setFilterData={setFilterData}
          ></AppliedJobsCart>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
