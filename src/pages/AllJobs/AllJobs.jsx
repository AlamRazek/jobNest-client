import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Jobs from "./jobs";

const AllJobs = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/Jobs").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
    /* .then((err) => {
        console.log(err);
      }); */
  }, []);

  const handleSearch = () => {
    const searchData = data?.filter((title) =>
      title.jobTitle.toLowerCase().includes(query)
    );
    setData(searchData);
  };

  /*   console.log(query);
  console.log(
    data?.filter((title) => title.jobTitle.toLowerCase().includes(query))
  ); */

  return (
    <div>
      <Helmet>
        <title>All Jobs</title>
      </Helmet>
      <div className="join my:4 lg:my-10 ">
        <input
          className="input input-bordered join-item"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn join-item rounded-r-full" onClick={handleSearch}>
          Search
        </button>
      </div>
      {data && data.length > 0
        ? data
            ?.filter((title) => title?.jobTitle?.toLowerCase().includes(query))
            .map((jobs) => <Jobs key={jobs._id} jobs={jobs}></Jobs>)
        : data?.map((jobs) => <Jobs key={jobs._id} jobs={jobs}></Jobs>)}
    </div>
  );
};

export default AllJobs;
