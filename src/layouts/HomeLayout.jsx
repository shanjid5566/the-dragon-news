import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNav from "../components/layerComponents/LeftNav";
import { Outlet } from "react-router";
import RightNav from "../components/layerComponents/RightNav";

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
      <main className="grid md:grid-cols-12 gap-5">
        <aside className="col-span-3"><LeftNav></LeftNav></aside>
        <section className="col-span-6"><Outlet></Outlet></section>
        <aside className="col-span-3"><RightNav></RightNav></aside>
      </main>
    </div>
  );
};

export default HomeLayout;
