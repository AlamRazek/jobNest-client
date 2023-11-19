import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="max-h-320px max-w-[50%]">
          <img
            src="https://wp.alithemes.com/html/jobhub/frontend/assets/imgs/page/about/banner-price.png"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <p className="my-2 text-blue-600">ABOUT US</p>
          <h2 className="card-title">
            Post your job and find the people you need
          </h2>
          <p className="my-2 ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered.
          </p>
          <p className="my-2 ">
            <b>Find fulltime & PartTime job</b>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered.
          </p>
          <div className="card-actions justify-end">
            <Link to="/alljobs">
              <button className="btn btn-primary">Browse all</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
