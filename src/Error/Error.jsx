import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="my-10 text-center mx-auto">
        <h1 className="mb-10 text-xl">Oops! You seem to be lost.</h1>
        <h1 className="my-10 text-xl">Sorry! Path not found.</h1>
        <NavLink className={"text-3xl text-red-500 mt-10 underline"} to={"/"}>
          Click to Go Back Home
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
