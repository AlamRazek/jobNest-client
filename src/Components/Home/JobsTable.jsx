import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const JobsTable = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/jobs")
      .then((res) => {
        setData(res?.data);
        setFilterData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(filterData);

  const handleTab = (tabIndex) => {
    // Use the tabIndex to determine which tab is selected
    if (tabIndex == 0) {
      // All Jobs
      setFilterData(data);
    } else if (tabIndex == 1) {
      // On Site Jobs
      setFilterData(data.filter((job) => job.radio == "On-Site"));
    } else if (tabIndex == 2) {
      // Remote Jobs
      setFilterData(data.filter((job) => job.radio == "Remote"));
    } else if (tabIndex == 3) {
      // Hybrid Jobs
      setFilterData(data.filter((job) => job.radio == "Hybrid"));
    } else if (tabIndex == 4) {
      // Part Time Jobs
      setFilterData(data.filter((job) => job.radio == "Part-Time"));
    }
  };

  const handleButton = () => {
    const notify = () => toast("Please LogIn");

    if (!user) {
      notify();
    }
  };

  return (
    <div>
      <Tabs onSelect={handleTab}>
        <TabList>
          <Tab>All</Tab>
          <Tab>On Site job</Tab>
          <Tab>Remote Job</Tab>
          <Tab>Hybrid</Tab>
          <Tab>Part Time</Tab>
        </TabList>

        {/*     {filterData.map((job) => (
        <TabPanel key={job._id}>
          <h2>{job.radio}</h2>
        </TabPanel>
      ))} */}
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-10 ">
            {filterData?.map((job) => (
              <div
                key={job._id}
                className="card w-96 bg-base-100   border border-gray-300"
              >
                <div className="card-body ">
                  <h2 className="card-title text-green-700">{job.jobTitle}</h2>
                  <p className="font-semibold">Posted By: {job.name}</p>

                  <p className="text-gray-600">
                    Posting Date: {job.postingDate}
                  </p>
                  <p className="text-gray-600">
                    Application Deadline: {job.deadline}
                  </p>

                  <p>Applicant Number: {job.applicantNumber}</p>
                  <span className="font-semibold text-gray-600">
                    Salary: ${job.salary}
                  </span>
                </div>
                <Link to={`details/${job._id}`}>
                  <div className="card-actions ">
                    <button
                      onClick={handleButton}
                      className="btn bg-purple-700 w-full rounded-sm text-white hover:bg-purple-600"
                    >
                      View Details
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-10 ">
            {filterData?.map((job) => (
              <div
                key={job._id}
                className="card w-96 bg-base-100   border border-gray-300"
              >
                <div className="card-body ">
                  <h2 className="card-title text-green-700">{job.jobTitle}</h2>
                  <p className="font-semibold">Posted By: {job.name}</p>

                  <p className="text-gray-600">
                    Posting Date: {job.postingDate}
                  </p>
                  <p className="text-gray-600">
                    Application Deadline: {job.deadline}
                  </p>

                  <p>Applicant Number: {job.applicantNumber}</p>
                  <span className="font-semibold text-gray-600">
                    Salary: ${job.salary}
                  </span>
                </div>
                <Link to={`details/${job._id}`}>
                  <div className="card-actions ">
                    <button
                      onClick={handleButton}
                      className="btn bg-purple-700 w-full rounded-sm text-white hover:bg-purple-600"
                    >
                      View Details
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-10 ">
            {filterData?.map((job) => (
              <div
                key={job._id}
                className="card w-96 bg-base-100   border border-gray-300"
              >
                <div className="card-body ">
                  <h2 className="card-title text-green-700">{job.jobTitle}</h2>
                  <p className="font-semibold">Posted By: {job.name}</p>

                  <p className="text-gray-600">
                    Posting Date: {job.postingDate}
                  </p>
                  <p className="text-gray-600">
                    Application Deadline: {job.deadline}
                  </p>

                  <p>Applicant Number: {job.applicantNumber}</p>
                  <span className="font-semibold text-gray-600">
                    Salary: ${job.salary}
                  </span>
                </div>
                <Link to={`details/${job._id}`}>
                  <div className="card-actions ">
                    <button
                      onClick={handleButton}
                      className="btn bg-purple-700 w-full rounded-sm text-white hover:bg-purple-600"
                    >
                      View Details
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-10 ">
            {filterData?.map((job) => (
              <div
                key={job._id}
                className="card w-96 bg-base-100   border border-gray-300"
              >
                <div className="card-body ">
                  <h2 className="card-title text-green-700">{job.jobTitle}</h2>
                  <p className="font-semibold">Posted By: {job.name}</p>

                  <p className="text-gray-600">
                    Posting Date: {job.postingDate}
                  </p>
                  <p className="text-gray-600">
                    Application Deadline: {job.deadline}
                  </p>

                  <p>Applicant Number: {job.applicantNumber}</p>
                  <span className="font-semibold text-gray-600">
                    Salary: ${job.salary}
                  </span>
                </div>
                <Link to={`details/${job._id}`}>
                  <div className="card-actions ">
                    <button
                      onClick={handleButton}
                      className="btn bg-purple-700 w-full rounded-sm text-white hover:bg-purple-600"
                    >
                      View Details
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-10 ">
            {filterData?.map((job) => (
              <div
                key={job._id}
                className="card w-96 bg-base-100   border border-gray-300"
              >
                <div className="card-body ">
                  <h2 className="card-title text-green-700">{job.jobTitle}</h2>
                  <p className="font-semibold">Posted By: {job.name}</p>

                  <p className="text-gray-600">
                    Posting Date: {job.postingDate}
                  </p>
                  <p className="text-gray-600">
                    Application Deadline: {job.deadline}
                  </p>

                  <p>Applicant Number: {job.applicantNumber}</p>
                  <span className="font-semibold text-gray-600">
                    Salary: ${job.salary}
                  </span>
                </div>

                <Link to={`details/${job._id}`}>
                  <div className="card-actions ">
                    <button
                      onClick={handleButton}
                      className="btn bg-purple-700 w-full rounded-sm text-white hover:bg-purple-600"
                    >
                      View Details
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
      <ToastContainer />
    </div>
  );
};

export default JobsTable;
