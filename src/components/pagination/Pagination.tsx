const Pagination = () => {
  return (
    <div className="flex flex-col items-center mb-[90px]">
      {/* pagination */}
      <div className="flex">
        <p className="font-[700]">Previous Page</p>
        {/* divider */}
        <span
          style={{ borderLeft: "1px solid black", width: 0.1 }}
          className="mx-[30px]"
        ></span>
        <p className="font-[700]">Next Page</p>
      </div>
      {/* total */}
      <p className="mt-[14px] text-[#989898]">Showing results 1-20</p>
    </div>
  );
};

export default Pagination;
