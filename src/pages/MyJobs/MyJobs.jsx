import { useContext, useEffect, useState } from "react";
import MyJobsItems from "./myJobsItems";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setjobs] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jobnest-server-ten.vercel.app/jobs/${user.displayName}`)
      .then((res) => {
        console.log(res.data);
        setjobs(res?.data);
      }, []);
  }, [user.displayName]);

  return (
    <div>
      <h2 className="my-4 lg:my-8 font-semibold text-center underline">
        My Posted Jobs
      </h2>
      {jobs?.map((job) => (
        <MyJobsItems
          key={job._id}
          job={job}
          jobs={jobs}
          setjobs={setjobs}
        ></MyJobsItems>
      ))}
    </div>
  );
};

export default MyJobs;
