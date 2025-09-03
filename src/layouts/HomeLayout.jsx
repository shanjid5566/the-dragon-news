import React from "react";
import Header from "../components/Header";

const HomeLayout = () => {
  return (
    <div className="container mx-auto">
      <header className="flex flex-col justify-center items-center pt-12 pb-7">
        <Header></Header>
      </header>
      <navbar></navbar>
      <main></main>
    </div>
  );
};

export default HomeLayout;
