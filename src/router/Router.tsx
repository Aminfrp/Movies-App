import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
