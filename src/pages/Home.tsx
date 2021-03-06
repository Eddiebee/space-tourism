import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="Home min-h-screen w-full pt-40 pb-4 text-center">
      <h5 className="text-base text-secondary tracking-[2.7px]">
        SO, YOU WANT TO TRAVEL TO
      </h5>
      <h1 className="text-[80px]">SPACE</h1>
      <p className="sm:text-[15px] text-secondary px-2 mt-5  font-light leading-relaxed">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>

      <button className="noSelect transition ease-linear delay-150 bg-primary hover:transition-all focus:outline hover:outline outline-primary/10 outline-[50px] text-dark font-bellefair text-xl rounded-full w-[160px] h-[160px] mx-auto mt-12  flex justify-center items-center">
        <Link to={"/destination"}>EXPLORE</Link>
      </button>
    </section>
  );
};

export default Home;
