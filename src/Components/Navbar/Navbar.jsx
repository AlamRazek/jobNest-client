import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    userLogOut()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#7600dc" : "",
          })}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/alljobs"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#7600dc" : "",
          })}
        >
          All Jobs
        </NavLink>
      </li>

      {user ? (
        <li>
          <NavLink
            to="/addajob"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#7600dc" : "",
            })}
          >
            Add A Job
          </NavLink>
        </li>
      ) : null}
      {user ? (
        <li>
          <NavLink
            to="/myjobs"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#7600dc" : "",
            })}
          >
            My Jobs
          </NavLink>
        </li>
      ) : null}
      {user ? (
        <li>
          <NavLink
            to="/appliedjobs"
            style={({ isActive }) => ({
              color: isActive ? "#fff" : "#545e6f",
              background: isActive ? "#7600dc" : "",
            })}
          >
            Applied Jobs
          </NavLink>
        </li>
      ) : null}

      <li>
        <NavLink
          to="/blogs"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#7600dc" : "",
          })}
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <img
            src="https://i.ibb.co/BVnfpnY/logo-no-background.png"
            alt=""
            className="max-h-10 m-2"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <p>{user?.displayName}</p>
          <span>
            {user ? (
              <div className="avatar">
                <div className="w-[54px] rounded-full mx-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
            ) : (
              ""
            )}
          </span>
          {user ? (
            <button onClick={handleLogOut} className="btn">
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
