import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const AddJob = () => {
  const notify = () => toast("Job Posted");

  const { user } = useContext(AuthContext);
  const [crntDate, setCrntDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    setCrntDate(formattedDate);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
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

    console.log(addedJob);

    axios
      .post("http://localhost:5000/job", addedJob, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res?.data);
        if (res?.insertedId) {
          notify();
        }
      });
    document.getElementById("reset").reset();
  };

  return (
    <div>
      <Helmet>
        <title>Add Jobs</title>
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
              value="On-Site"
              className="radio "
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Remote</span>
            <input
              type="radio"
              name="radio"
              value="Remote"
              className="radio  "
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text"> Part-Time</span>
            <input
              type="radio"
              name="radio"
              value="Part-Time"
              className="radio  "
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">Hybrid</span>
            <input
              type="radio"
              name="radio"
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
            defaultValue={crntDate}
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
            defaultValue={crntDate}
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
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Post Job</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
