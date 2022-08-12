import { ISingleMovie } from "../../interfaces/movies";

const DetailsInfo = ({ singleMovie }: { singleMovie: ISingleMovie | null }) => {
  const informations = {
    Budget: singleMovie?.budget,
    Revenue: singleMovie?.revenue,
    ReleaseDate: singleMovie?.release_date,
    Runtime: singleMovie?.runtime,
    Score: {
      vote_average: singleMovie?.vote_average,
      vote_count: singleMovie?.vote_count,
    },
    Genres: singleMovie?.genres,
    IMDB: singleMovie?.imdb_id,
    Homepage: singleMovie?.homepage,
  };

  // convert second to hour format
  function secondsToHms(d: number) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);

    var hDisplay = h > 0 ? h + "h " : "";
    var mDisplay = m > 0 ? m + "m " : "";
    return hDisplay + mDisplay;
  }

  return (
    <div className="mx-[208px] mb-[53px] flex">
      {/* image */}
      <div className="w-[330px] h-[495px]">
        <img
          src={`https://image.tmdb.org/t/p/w500/${singleMovie?.poster_path}`}
          className="w-[330px] h-[495px] rounded-[12px]"
          width={"330px"}
          height={"495px"}
          alt={singleMovie?.title}
        />
      </div>
      {/* info */}
      <div className="pl-[70px] pt-5 pr-8 w-full">
        <div className="my-[9px] flex justify-between">
          <p className="font-[700]">{Object.keys(informations)[0]}</p>
          <p>
            $
            {informations.Budget
              ? (informations?.Budget as number).toLocaleString()
              : 0}
          </p>
        </div>

        <div className="my-[9px] flex justify-between">
          <p className="font-[700]">{Object.keys(informations)[1]}</p>
          <p>
            $
            {informations.Revenue
              ? (informations?.Revenue as number).toLocaleString()
              : 0}
          </p>
        </div>

        <div className="my-[9px] flex justify-between">
          <p className="font-[700]">{Object.keys(informations)[2]}</p>
          <p>{informations.ReleaseDate ? informations?.ReleaseDate : ""}</p>
        </div>

        <div className="my-[9px] flex justify-between">
          <p className="font-[700]">{Object.keys(informations)[3]}</p>
          <p>
            {informations.Runtime
              ? secondsToHms((informations?.Runtime as number) * 60)
              : ""}
          </p>
        </div>

        <div className="my-[9px] flex justify-between">
          <p className="font-[700]">{Object.keys(informations)[4]}</p>
          <p>
            {informations.Score ? (
              <div>
                <span>
                  {Math.round(
                    (informations?.Score.vote_average as number) * 10
                  ) / 10}
                </span>
                <span className="text-[14px]">{` (${informations?.Score.vote_count} votes)`}</span>
              </div>
            ) : (
              ""
            )}
          </p>
        </div>

        <div className="my-[9px] flex justify-between">
          <p className="font-[700]">{Object.keys(informations)[5]}</p>
          <p>
            {informations?.Genres?.length
              ? informations?.Genres?.map((genre, key) => (
                  <span key={key as number}>
                    {informations?.Genres?.length === key + 1
                      ? genre.name
                      : genre.name + " , "}
                  </span>
                ))
              : ""}
          </p>
        </div>

        <div className="my-[9px] flex justify-between">
          <p className="font-[700]">{Object.keys(informations)[6]}</p>
          <div>
            {informations.IMDB ? (
              <a
                className="text-[#318FE7] underline "
                href={`https://www.imdb.com/title/${informations?.IMDB}`}
              >
                Link
              </a>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="my-[9px] flex justify-between">
          <p className="font-[700]">{Object.keys(informations)[7]}</p>
          {informations.Homepage ? (
            <a
              className="text-[#318FE7] underline "
              href={informations?.Homepage}
            >
              Link
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsInfo;
