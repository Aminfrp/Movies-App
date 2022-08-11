import { useCallback, useEffect, useState } from "react";
import HomeFilter from "../../components/homeFilter/HomeFilter";
import Movies from "../../components/movies/Movies";
import Pagination from "../../components/pagination/Pagination";
import moviesAxios from "../../axios/moviesAxios";
import { IMovies } from "../../interfaces/movies";

const Home = () => {
  const [movies, setMovies] = useState<IMovies | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [skip, setSkip] = useState<{ start: number; end: number }>({
    start: 1,
    end: 20,
  });

  // get movies from server
  const getMoviesList = useCallback(async () => {
    setLoading(true);
    try {
      const response = await moviesAxios.getMovies(pageNumber);
      setMovies(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [pageNumber]);

  useEffect(() => {
    getMoviesList();
  }, [getMoviesList, pageNumber]);

  // next page
  const handleNextPage = () => {
    if (pageNumber !== 500) {
      setPageNumber(pageNumber + 1);
      setSkip({ start: skip.end, end: skip.end + 20 });
    }
  };

  // previus page
  const previusNextPage = () => {
    if (pageNumber !== 1) {
      setPageNumber(pageNumber - 1);
      setSkip({
        start: skip.start - 20 === 0 ? 1 : skip.start - 20,
        end: skip.end - 20,
      });
    }
  };

  return (
    <>
      <HomeFilter />
      <Movies movies={movies} loading={loading} />
      <Pagination
        movies={movies}
        handleNextPage={handleNextPage}
        previusNextPage={previusNextPage}
        skip={skip}
      />
    </>
  );
};

export default Home;
