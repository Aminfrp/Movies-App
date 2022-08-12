import { useEffect, useState } from "react";
import Button from "../buttons/Button";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { Box, ClickAwayListener } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
/* eslint-disable */
declare module "@wojtekmaj/react-daterange-picker";

const HomeFilter = () => {
  const [open, toggle] = useState<boolean>(false);
  const [showDate, setShowDate] = useState<boolean>(false);
  const [releaseDate, setReleaseDate] = useState<[Date, Date]>([
    new Date(),
    new Date(),
  ]);

  console.log(showDate);

  useEffect(() => {
    toggle(false);
  }, [releaseDate]);

  return (
    <div className="h-[85px] bg-[#E2E2E2] rounded-[6px] mt-[69px] mx-[208px] mb-[119px] flex justify-between items-center">
      {/* select date  */}
      <div className="flex items-center text-center">
        <p className="ml-[81px] mr-[29px]">Search by release date: </p>
        <ClickAwayListener
          onClickAway={() => {
            toggle(false);
          }}
        >
          <span className="flex">
            <Box
              component="div"
              className="w-[221px] h-[33px] border border-[#CFCFCF] text-[12px] flex items-center justify-center"
              style={{ backgroundColor: "white" }}
              onClick={() => toggle(true)}
            >
              {showDate &&
                releaseDate[0].toDateString() +
                  " - " +
                  releaseDate[1].toDateString()}

              {showDate && (
                <ClearIcon
                  fontSize="small"
                  className="opacity-0.5 mx-2 hover:cursor-pointer opacity-[0.5] hover:opacity-[1]"
                  onClick={() => {
                    setReleaseDate([new Date(), new Date()]);
                    setShowDate(false);
                  }}
                />
              )}
            </Box>
            <DateRangePicker
              onChange={(value: [Date, Date]) => {
                setReleaseDate(value);
                setShowDate(true);
              }}
              value={releaseDate}
              isOpen={open}
            />
          </span>
        </ClickAwayListener>
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
