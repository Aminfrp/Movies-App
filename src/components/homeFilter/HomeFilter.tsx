import Button from "../buttons/Button";

const HomeFilter = () => {
  return (
    <div className="h-[85px] bg-[#E2E2E2] rounded-[6px] mt-[69px] mx-[208px] mb-[119px] flex justify-between items-center">
      {/* select date  */}
      <div className="flex items-center">
        <p className="ml-[81px] mr-[29px]">Search by release date: </p>
        <div
          className="w-[221px] h-[33px] border border-[#CFCFCF]"
          style={{ backgroundColor: "white" }}
        ></div>
      </div>

      {/* search button */}
      <Button
        className="bg-[#549DF2] w-[74px] rounded-[100px] h-[33px] px-[12px] py-[7px] mr-[62px]"
        style={{ color: "white", transition: "ease-in 0.2s" }}
        handleClick={() => null}
      >
        Search
      </Button>
    </div>
  );
};

export default HomeFilter;
