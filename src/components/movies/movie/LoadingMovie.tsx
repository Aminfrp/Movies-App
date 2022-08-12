import { Skeleton } from "@mui/material";

const LoadingMovie = () => {
  return (
    <div
      className="h-[195px] bg-[#f5f5f5] rounded-[6px] flex  "
      style={{ transition: "ease 0.5s" }}
    >
      {/* poster */}
      <Skeleton
        variant="rectangular"
        className="rounded-[10px] w-[50%] m-2"
        height="92%"
      />
      {/* desctioption of movie */}
      <div className="flex flex-col justify-between pr-[17px] w-full">
        <Skeleton variant="text" className="ml-[14px] pt-[16px] " width="95%" />
        <div>
          {/* date of movie */}
          <div className="flex pl-[14px]">
            <Skeleton
              variant="rectangular"
              className="rounded-[6px] w-[20px] h-[20px] mr-3"
            />
            <Skeleton variant="text" className="text-[12px]" width="70%" />
          </div>
          {/* ganre */}
          <Skeleton
            variant="text"
            className="ml-[14px] pt-[16px] w-[80%]"
            width="95%"
            height="40px"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingMovie;
