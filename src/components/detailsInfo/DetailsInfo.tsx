const DetailsInfo = () => {
  const informations = [
    "Budget",
    "Revenue",
    "Release Date",
    "Runtime",
    "Score",
    "Genres",
    "IMDB Link",
    "Homepage Link",
  ];
  return (
    <div className="mx-[208px] mb-[53px] flex">
      {/* image */}
      <div className="w-[330px] h-[495px]">
        <img
          src="/logo512.png"
          className="w-[330px] h-[495px] rounded-[12px]"
          width={"330px"}
          height={"495px"}
          alt="123"
        />
      </div>
      {/* info */}
      <div className="pl-[70px] pt-5 pr-8 w-full">
        {informations.map((info, key) => {
          return (
            <div key={key} className="my-[9px] flex justify-between">
              <p className="font-[700]">{info}</p>
              <p>{"$170’000’000"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailsInfo;
