import React from "react";
import Navbar from "../../Components/Common/Navbar";
import Footer from "../../Components/Common/Footer";
import Signup from "../../Components/Authentication/Signup";

const SignupPage = () => {
  return (
    <div>
      <Navbar />
      <Signup />
      <Footer />
    </div>
  );
};

export default SignupPage;
