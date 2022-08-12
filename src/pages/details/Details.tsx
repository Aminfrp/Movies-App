import { useCallback, useEffect, useState } from "react";
import DetailsHeader from "../../components/detailsHeader/DetailsHeader";
import DetailsInfo from "../../components/detailsInfo/DetailsInfo";
import { ISingleMovie } from "../../interfaces/movies";
import moviesAxios from "../../axios/moviesAxios";
import { useParams } from "react-router-dom";

const Details = () => {
  const [singleMovie, setSingleMovie] = useState<ISingleMovie | null>(null);
  const { id } = useParams();

  // get movie
  const getSingleMovie = useCallback(async () => {
    try {
      const response = await moviesAxios.getSingleMovie(parseInt(id as string));
      setSingleMovie(response.data);
    } catch (error) {}
  }, [id]);

  useEffect(() => {
    getSingleMovie();
  }, [getSingleMovie]);
  return (
    <>
      <DetailsHeader singleMovie={singleMovie} />
      <DetailsInfo singleMovie={singleMovie} />
      {/* description */}
      <div className="mx-[208px]">{singleMovie?.overview}</div>
      {/* Credit */}
      <div className="flex flex-col mb-[400px] mt-[80px] mx-[208px]">
        <p className="font-[700] mb-[12px]">Credit:</p>
        <p className="text-[14px]">
          Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace ,
          Zoe Saldanna , Vin Diesel , Chris Pratt , Bradley Cooper , Lee Pace
          and 19 more.
        </p>
      </div>
    </>
  );
};

export default Details;
