import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyJobsItems = ({ job, jobs, setjobs }) => {
  const {
    bannerUrl,
    deadline,
    name,
    radio,
    salary,
    postingDate,
    jobTitle,
    _id,
  } = job;
  console.log(job.name);

  const ConfirmDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result?.isConfirmed) {
        axios
          .delete(
            `https://jobnest-server-j4r1pksyo-razeks-projects.vercel.app/delete/${_id}`
          )
          .then((res) => {
            console.log(res?.data);
            if (res?.data.deletedCount > 0) {
              Swal.fire("Deleted!", "job has been deleted.", "success");
              const remaining = jobs.filter((job) => job._id !== _id);
              setjobs(remaining);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-sm md:ta-md lg:tab-lg">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={bannerUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{postingDate}</div>
                  </div>
                </div>
              </td>
              <td>
                {jobTitle}
                <br />
                <span className="badge badge-ghost badge-sm">{radio}</span>
              </td>
              <td>{deadline}</td>
              <th>
                <Link to={`/update/${_id}`}>
                  <button className="btn btn-xs">Update</button>
                </Link>
                <button
                  className="btn btn-xs ml-4"
                  onClick={() => ConfirmDelete(_id)}
                >
                  Delete
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobsItems;
