import Button from "../buttons/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DetailsHeader = () => {
  return (
    <div className="h-[85px] bg-[#E2E2E2] rounded-[6px] mt-[69px] mx-[208px] mb-[119px] flex items-center">
      {/* back button */}
      <Button
        className="bg-[#549DF2] w-[92px] rounded-[100px] ml-[35px] p-[7px]"
        style={{ color: "white", transition: "ease-in 0.2s" }}
        handleClick={() => {}}
        disabled={true}
      >
        <ArrowBackIcon className="mr-[6.3px] ml-[14px]" fontSize="small" />{" "}
        <span className="mr-[22px]">Back</span>
      </Button>
      {/* title */}
      <div className="flex flex-col ml-[64px]">
        <p className="font-[700] text-[18px]">Guardians of the Galaxy</p>
        <p className="text-[18px] mt-[6px]">All heroes start somewhere.</p>
      </div>
    </div>
  );
};

export default DetailsHeader;
