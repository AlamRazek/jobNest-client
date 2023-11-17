const AppliedJobsCart = ({ jobs, data, setFilterData }) => {
  const { name } = jobs;

  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100   border border-gray-300 ">
          <div className="card-body ">
            <h2 className="card-title text-green-700">{jobs.jobTitle}</h2>
            <p className="font-semibold">Posted By: {name}</p>

            <p className="text-gray-600">Posting Date: {jobs.postingDate}</p>
            <p className="text-gray-600">
              Application Deadline: {jobs.deadline}
            </p>

            <span className="font-semibold text-gray-600">
              Salary: ${jobs.salary}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsCart;
