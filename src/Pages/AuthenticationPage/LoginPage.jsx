import React from "react";
import Navbar from "../../Components/Common/Navbar";
import Footer from "../../Components/Common/Footer";
import Login from "../../Components/Authentication/Login";

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
