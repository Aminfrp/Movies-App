const Movie = () => {
  return (
    <div className="h-[195px] bg-[#F1F1F1] rounded-[6px] flex border border-[#C4C4C4] border-solid">
      {/* poster */}
      <img
        src="/logo512.png"
        alt="123"
        className="w-[128px] p-[9px] h-full rounded-l-[6px]"
      />
      {/* desctioption of movie */}
      <div className="flex flex-col justify-between pr-[17px]">
        <p className="pl-[14px] pt-[16px] font-[700]">
          Marvel Avengers Assemble
        </p>
        <div>
          {/* date of movie */}
          <div className="flex pl-[14px]">
            <img src="/icons/i_calender.png" className="pr-[7px]" alt="Date" />
            <p className="text-[12px] text-[#4E4E4E]">2015-01-11</p>
          </div>
          {/* ganre */}
          <p className="pl-[14px] pt-[14px] pb-[28px] text-[#505050] text-[12px]">
            Action . Action . Action
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
