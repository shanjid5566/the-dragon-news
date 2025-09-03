import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="container mx-auto font-poppins">
      <header className="flex flex-col justify-center items-center pt-12 pb-7">
        <Header></Header>
        <section className="my-8">
            <LatestNews></LatestNews>
        </section>
      </header>
      <navbar className="mt-3">
        <Navbar></Navbar>
      </navbar>
      <main></main>
    </div>
  );
};

export default HomeLayout;
