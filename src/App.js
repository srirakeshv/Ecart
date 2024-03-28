import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
