import React from "react";
import Banner from "./Banner";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="h-[100vh]">
      <Helmet>
        <title>Home </title>
      </Helmet>
      <Banner></Banner>
      <h2>This is home</h2>
    </div>
  );
};

export default Home;
