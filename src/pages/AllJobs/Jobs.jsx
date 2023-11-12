import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const Jobs = ({ jobs }) => {
  const { user } = useContext(AuthContext);
  const { deadline, name, salary, jobTitle, postingDate, _id } = jobs;

  const handleButton = () => {
    const notify = () => toast("Please LogIn");

    if (!user) {
      notify();
    }
  };

  return (
    <div className="overflow-x-auto p-2 flex">
      <table className="table flex">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Job Posting Date</th>
            <th>Application Deadline</th>
            <th>Salary range</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">{name}</div>
                </div>
              </div>
            </td>
            <td>
              <br />
              <p className="">{jobTitle}</p>
            </td>
            <td>{postingDate}</td>
            <td>{deadline}</td>
            <td>{salary}</td>
            <th>
              <Link to={`details/${_id}`}>
                <button
                  onClick={handleButton}
                  className="btn btn-outline   text-black  font-bold  hover:bg-purple-800"
                >
                  See details
                </button>
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Jobs;
