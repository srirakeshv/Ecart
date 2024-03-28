import React from "react";
import Navbar from "../../Components/Common/Navbar";
import ProductsListItem from "../../Components/Products/ProductsListItem";
import Footer from "../../Components/Common/Footer";

const ProductPage = () => {
  return (
    <div className="bg-grey1" style={{ minHeight: "100vh" }}>
      <Navbar />
      <ProductsListItem />
      <Footer />
    </div>
  );
};

export default ProductPage;
