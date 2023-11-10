const Jobs = ({ jobs }) => {
  const {
    applicantNumber,
    bannerUrl,
    deadline,
    jobDetails,
    name,
    radio,
    salary,
  } = jobs;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={bannerUrl}
          alt="Movie"
          className="max-h-48 p-3  lg:p-7 mx-10"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>{}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
