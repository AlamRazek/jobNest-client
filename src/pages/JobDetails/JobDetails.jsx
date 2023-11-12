import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const JobDetail = useLoaderData();

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
  }, []);
  const {
    bannerUrl,
    jobDetails,
    jobTitle,
    name,
    salary,
    applicantNumber,
    postingDate,
  } = JobDetail;

  return (
    <div className="card card-compact max-w-[880px] max-h-[650px]  mx-auto my-6 lg:my-16">
      <figure>
        <img src={bannerUrl} alt="banner" />
      </figure>
      <div className="card-body">
        <div className="flex gap-4">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={bannerUrl} />
            </div>
          </div>
          <h2 className="card-title ">{name}</h2>
        </div>
        <h2 className="card-title">{jobTitle}</h2>
        <p>
          <span className="font-bold">Main Task:</span> {jobDetails}
        </p>
        <p>Salary: ${salary}</p>
        <p>
          Applicant Number: <span className="font-bold">{applicantNumber}</span>{" "}
        </p>
        <div className="card-actions justify-center my-4 lg:my-8">
          {user.displayName === name && currentDate > postingDate ? (
            <button
              disabled
              className="btn bg-purple-700 w-[50%] rounded-sm text-white hover:bg-purple-600"
            >
              Apply
            </button>
          ) : (
            <button
              className="btn bg-purple-700 w-[50%] rounded-sm text-white hover:bg-purple-600"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Apply
            </button>
          )}
        </div>
      </div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                value={user.displayName}
                readOnly
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={user.email}
                required
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume Link: </span>
              </label>
              <input
                type="text"
                placeholder="submit resume link"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-purple-700 rounded-sm text-white hover:bg-purple-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default JobDetails;
