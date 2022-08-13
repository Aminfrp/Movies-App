import { Skeleton } from "@mui/material";

const LoadingDetailsInfo = () => {
  return (
    <div className="mx-[208px] mb-[53px] flex">
      {/* image */}
      <div className="w-[500px] h-[495px]">
        <Skeleton variant="rounded" width={"500px"} height={"100%"} />
      </div>
      {/* info */}
      <div className="pl-[70px] pt-5 pr-8 w-full">
        {/*Budget*/}
        <div className="my-[9px] flex justify-between">
          <p className="font-[700]">Budget</p>
          <p>
            <Skeleton variant="text" width="2rem" sx={{ fontSize: "1rem" }} />
          </p>
        </div>
        {/*Revenue*/}
        <div className="my-[9px] flex justify-between">
          <p className="font-[700]">Revenue</p>
          <p>
            <Skeleton variant="text" width="2rem" sx={{ fontSize: "1rem" }} />
          </p>
        </div>
        {/*ReleaseDate*/}
        <div className="my-[9px] flex justify-between">
          <p className="font-[700]">ReleaseDate</p>
          <p>
            <Skeleton variant="text" width="2rem" sx={{ fontSize: "1rem" }} />
          </p>
        </div>
        {/*Runtime*/}
        <div className="my-[9px] flex justify-between">
          <p className="font-[700]">Runtime</p>
          <p>
            <Skeleton variant="text" width="2rem" sx={{ fontSize: "1rem" }} />
          </p>
        </div>
        {/*Score*/}
        <div className="my-[9px] flex justify-between">
          <p className="font-[700]">Score</p>
          <p>
            <Skeleton variant="text" width="2rem" sx={{ fontSize: "1rem" }} />
          </p>
        </div>
        {/*Genres*/}
        <div className="my-[9px] flex justify-between">
          <p className="font-[700]">Genres</p>
          <p>
            <Skeleton variant="text" width="2rem" sx={{ fontSize: "1rem" }} />
          </p>
        </div>
        {/*IMDB*/}
        <div className="my-[9px] flex justify-between">
          <p className="font-[700]">IMDB</p>
          <p>
            <Skeleton variant="text" width="2rem" sx={{ fontSize: "1rem" }} />
          </p>
        </div>
        {/*Homepage*/}
        <div className="my-[9px] flex justify-between">
          <p className="font-[700]">Homepage</p>
          <p>
            <Skeleton variant="text" width="2rem" sx={{ fontSize: "1rem" }} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingDetailsInfo;
