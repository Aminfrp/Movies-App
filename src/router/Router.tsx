import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
