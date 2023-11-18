import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateJobs = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const {
    _id,
    name,
    bannerUrl,
    jobTitle,
    radio,
    salary,
    jobDetails,
    deadline,
    applicantNumber,
    postingDate,
  } = data;

  const [crntDate, setCrntDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    setCrntDate(formattedDate);
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const notify = () => toast("Updated Successfully");

    const form = e.target;
    const jobTitle = form.jobTitle.value;
    const bannerUrl = form.bannerUrl.value;
    const name = form.name.value;
    const radio = form.radio.value;
    const salary = form.salary.value;
    const jobDetails = form.jobDetails.value;
    const postingDate = form.postingDate.value;
    const deadline = form.deadline.value;
    const applicantNumber = parseInt(form.applicantNumber.value);

    const addedJob = {
      jobTitle,
      bannerUrl,
      name,
      radio,
      salary,
      jobDetails,
      deadline,
      applicantNumber,
      postingDate,
    };

    axios
      .put(
        `https://jobnest-server-249tiz2yb-razeks-projects.vercel.app/update/${_id}`,
        addedJob,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res?.data);
        if (res?.data?.modifiedCount) {
          notify();
        }
        navigate("/");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Update Jobs</title>
      </Helmet>
      <div data-aos="fade-down">
        <h2 className="text-2xl text-center my-2 md:my-6 lg:my-6 font-semibold">
          Please Register
        </h2>
      </div>

      <form
        className="card-body md:w-3/4 lg:w-1/2 mx-auto"
        data-aos="fade-up"
        onSubmit={handleSubmit}
        id="reset"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Picture URL of the Job Banner</span>
          </label>
          <input
            type="text"
            placeholder="bannerUrl"
            defaultValue={bannerUrl}
            name="bannerUrl"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            placeholder="Job title"
            defaultValue={jobTitle}
            name="jobTitle"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            value={user.displayName}
            name="name"
            className="input input-bordered"
            required
            readOnly
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold underline">
              Job Category
            </span>
          </label>

          <label className="label cursor-pointer">
            <span className="label-text">On Site</span>
            <input
              type="radio"
              name="radio"
              defaultChecked={radio === "On-Site"}
              value="On-Site"
              className="radio "
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Remote</span>
            <input
              type="radio"
              name="radio"
              defaultChecked={radio === "Remote"}
              value="Remote"
              className="radio  "
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text"> Part-Time</span>
            <input
              type="radio"
              name="radio"
              defaultChecked={radio === "Part-Time"}
              value="Part-Time"
              className="radio  "
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Hybrid</span>
            <input
              type="radio"
              name="radio"
              defaultChecked={radio === "Hybrid"}
              value="Hybrid"
              className="radio  "
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Salary Range</span>
          </label>
          <input
            type="number"
            placeholder="salary range"
            defaultValue={salary}
            name="salary"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Job Description</span>
          </label>
          <input
            type="text"
            placeholder=" Job Description"
            defaultValue={jobDetails}
            name="jobDetails"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold underline">
              Job Posting Date
            </span>
          </label>
          <input
            type="date"
            name="postingDate"
            readOnly
            defaultValue={postingDate}
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold underline">
              Application Deadline
            </span>
          </label>
          <input
            type="date"
            name="deadline"
            min={crntDate}
            defaultValue={deadline}
            required
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Applicants Number</span>
          </label>
          <input
            type="number"
            placeholder="Applicant Number"
            name="applicantNumber"
            defaultValue="0"
            className="input input-bordered"
            disabled
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Job Post</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateJobs;
