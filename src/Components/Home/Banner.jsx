const Banner = () => {
  return (
    <div
      className="hero min-h-[60vh]"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/hRX8Sq6/clark-tibbs-oq-Stl2-L5ox-I-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Find the right fit.</h1>
          <p className="mb-5 text-xl">
            Find the perfect job opportunity that matches your skills and
            ambitions. Your dream job is just a click away.
          </p>
          <div className="join ">
            <input
              className="input input-bordered join-item bg-slate-50"
              placeholder=""
            />
            <button className="btn join-item rounded-r-full">search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
