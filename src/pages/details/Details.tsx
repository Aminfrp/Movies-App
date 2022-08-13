import { useCallback, useEffect, useState } from "react";
import DetailsHeader from "../../components/detailsHeader/DetailsHeader";
import DetailsInfo from "../../components/detailsInfo/DetailsInfo";
import { ICredits, ISingleMovie } from "../../interfaces/movies";
import moviesAxios from "../../axios/moviesAxios";
import { useParams } from "react-router-dom";

const Details = () => {
  const [singleMovie, setSingleMovie] = useState<ISingleMovie | null>(null);
  const [credits, setCredits] = useState<ICredits | null>(null);
  const { id } = useParams();

  // get movie
  const getSingleMovie = useCallback(async () => {
    try {
      const response = await moviesAxios.getSingleMovie(parseInt(id as string));
      setSingleMovie(response.data);
    } catch (error) {}
  }, [id]);

  // get credits
  const getCredits = useCallback(async () => {
    try {
      const response = await moviesAxios.getMovieCredits(
        parseInt(id as string)
      );
      setCredits(response.data);
    } catch (error) {}
  }, [id]);

  useEffect(() => {
    getSingleMovie();
    getCredits();
  }, [getCredits, getSingleMovie]);

  // get top ten actors and number of all actors
  const getTopTenActors = () => {
    const popularityActors = credits?.cast
      .filter((castItem) => castItem.known_for_department === "Acting")
      .sort((a, b) => b.popularity - a.popularity);
    return {
      topTen: popularityActors?.splice(0, 10),
      count: popularityActors?.length,
    };
  };

  return (
    <>
      <DetailsHeader singleMovie={singleMovie} />
      <DetailsInfo singleMovie={singleMovie} />
      {/* description */}
      <div className="mx-[208px]">{singleMovie?.overview}</div>
      {/* Credit */}
      <div className="flex flex-col mb-[400px] mt-[80px] mx-[208px]">
        {/* actors */}
        <p className="font-[700] mb-[12px]">Credit:</p>
        <p className="text-[14px]">
          {getTopTenActors().topTen?.map((actor, key) => (
            <span key={key}>
              {key + 1 === getTopTenActors().topTen?.length
                ? actor.original_name
                : actor.original_name + " , "}
            </span>
          ))}
          and {(getTopTenActors().count as number) - 10} more.
        </p>
      </div>
    </>
  );
};

export default Details;
