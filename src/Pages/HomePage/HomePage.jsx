import React from "react";
import Navbar from "../../Components/Common/Navbar";
import MenuBar from "../../Components/Home/HomeComponents/MenuBar";

const HomePage = () => {
  return (
    <div className="bg-grey1" style={{ minHeight: "100vh" }}>
      <Navbar />
      <MenuBar />
    </div>
  );
};

export default HomePage;
