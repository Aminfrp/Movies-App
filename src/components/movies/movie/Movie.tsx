import { Link } from "react-router-dom";

interface Props {
  title: string;
  imageUrl: string;
  releaseDate: string;
  to: string;
}
const Movie = (props: Props) => {
  const { title, releaseDate, imageUrl, to } = props;
  return (
    <Link to={to}>
      <div
        className="hover:cursor-pointer hover:scale-105 hover:drop-shadow-lg h-[195px] bg-[#F1F1F1] rounded-[6px] flex border border-[#C4C4C4] border-solid"
        style={{ transition: "ease 0.5s" }}
      >
        {/* poster */}
        <img
          src={`https://image.tmdb.org/t/p/w500/${imageUrl}`}
          alt={title}
          className="w-[128px] p-[3px] h-full rounded-l-[6px]"
        />
        {/* desctioption of movie */}
        <div className="flex flex-col justify-between pr-[17px]">
          <p className="pl-[14px] pt-[16px] font-[700]">{title}</p>
          <div>
            {/* date of movie */}
            <div className="flex pl-[14px]">
              <img
                src="/icons/i_calender.png"
                className="pr-[7px]"
                alt="Date"
              />
              <p className="text-[12px] text-[#4E4E4E]">{releaseDate}</p>
            </div>
            {/* ganre */}
            <p className="pl-[14px] pt-[14px] pb-[28px] text-[#505050] text-[12px]">
              Action . Action . Action
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
