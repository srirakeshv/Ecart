import React from "react";
import Navbar from "../../Components/Common/Navbar";
import MenuBar from "../../Components/Home/HomeComponents/MenuBar";
import Mobile from "../../Components/Home/HomeComponents/Mobile";
import Electronics from "../../Components/Home/HomeComponents/Electronics";
import Accessories from "../../Components/Home/HomeComponents/Accessories";
import Appliances from "../../Components/Home/HomeComponents/Appliances";
import Footer from "../../Components/Common/Footer";

const HomePage = () => {
  return (
    <div className="bg-grey1" style={{ minHeight: "100vh" }}>
      <Navbar />
      <MenuBar />
      <Mobile />
      <Electronics />
      <Accessories />
      <Appliances />
      <Footer />
    </div>
  );
};

export default HomePage;
