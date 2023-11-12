import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const JobDetails = useLoaderData();
  console.log("datas", JobDetails);

  const { name, jobTitle } = JobDetails;

  return (
    <div>
      <h2>Job details</h2>
      <h2>{jobTitle}</h2>
    </div>
  );
};

export default JobDetails;
