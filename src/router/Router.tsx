import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";

const Router = () => {
  // filter
  const [releaseDates, setReleaseDates] = useState<[Date, Date]>([
    new Date(),
    new Date(),
  ]);
  const [dateFilter, setDateFilter] = useState<boolean>(false);
  const [filterFlag, setFilterFlag] = useState<boolean>(false);
  // pagination
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [skip, setSkip] = useState<{ start: number; end: number }>({
    start: 1,
    end: 20,
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Home
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              skip={skip}
              setSkip={setSkip}
              releaseDates={releaseDates}
              setReleaseDates={setReleaseDates}
              dateFilter={dateFilter}
              setDateFilter={setDateFilter}
              filterFlag={filterFlag}
              setFilterFlag={setFilterFlag}
            />
          }
        />
        <Route
          path="/details/:id"
          element={
            <Details pageNumber={pageNumber} setPageNumber={setPageNumber} />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
