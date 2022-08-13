import { useCallback, useEffect, useState } from "react";
import DetailsHeader from "../../components/detailsHeader/DetailsHeader";
import DetailsInfo from "../../components/detailsInfo/DetailsInfo";
import { ICredits, ISingleMovie } from "../../interfaces/movies";
import moviesAxios from "../../axios/moviesAxios";
import { useParams } from "react-router-dom";
import LoadingDetailsHeader from "../../components/detailsHeader/LoadingDetailsHeader";
import LoadingDetailsInfo from "../../components/detailsInfo/LoadingDetailsInfo";
import { Skeleton } from "@mui/material";

const Details = () => {
  const [singleMovie, setSingleMovie] = useState<ISingleMovie | null>(null);
  const [credits, setCredits] = useState<ICredits | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();

  // get movie
  const getSingleMovie = useCallback(async () => {
    setLoading(true);
    try {
      const response = await moviesAxios.getSingleMovie(parseInt(id as string));
      setSingleMovie(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [id]);

  // get credits
  const getCredits = useCallback(async () => {
    setLoading(true);
    try {
      const response = await moviesAxios.getMovieCredits(
        parseInt(id as string)
      );
      setCredits(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
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
      {loading ? (
        <>
          <LoadingDetailsHeader />
          <LoadingDetailsInfo />
          <div className="flex flex-col mb-[400px] mt-[80px] mx-[208px]">
            <p className="font-[700] mb-[12px]">Credit:</p>
            <p className="text-[14px]">
              <Skeleton variant="text" width="100%" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" width="100%" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" width="100%" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" width="100%" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" width="100%" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" width="100%" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="text" width="100%" sx={{ fontSize: "1rem" }} />
            </p>
          </div>
        </>
      ) : (
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
      )}
    </>
  );
};

export default Details;
