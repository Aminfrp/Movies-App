import { useCallback, useEffect, useState } from "react";
import HomeFilter from "../../components/homeFilter/HomeFilter";
import Movies from "../../components/movies/Movies";
import Pagination from "../../components/pagination/Pagination";
import moviesAxios from "../../axios/moviesAxios";
import { IGenres, IMovies } from "../../interfaces/movies";

const Home = () => {
  // filter
  const [releaseDates, setReleaseDates] = useState<[Date, Date]>([
    new Date(),
    new Date(),
  ]);
  const [dateFilter, setDateFilter] = useState<boolean>(false);
  const [filterFlag, setFilterFlag] = useState<boolean>(false);

  // data
  const [movies, setMovies] = useState<IMovies | null>(null);
  const [genres, setGenres] = useState<IGenres | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // pagination
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [skip, setSkip] = useState<{ start: number; end: number }>({
    start: 1,
    end: 20,
  });

  // get movies from server
  const getMoviesList = useCallback(
    async (pageNumber: number, releaseDate?: Date[], dateFilter?: boolean) => {
      setLoading(true);
      try {
        const response = await moviesAxios.getMovies(
          pageNumber,
          releaseDate,
          dateFilter
        );
        getGenresList();
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // get genres from server
  const getGenresList = useCallback(async () => {
    setLoading(true);
    try {
      const response = await moviesAxios.getGenres();
      setGenres(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (filterFlag) {
      getMoviesList(pageNumber, releaseDates, dateFilter);
    } else {
      getMoviesList(pageNumber, releaseDates, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterFlag, getMoviesList, pageNumber]);

  // next page
  const handleNextPage = () => {
    if (pageNumber !== 500 && movies?.page !== movies?.total_pages) {
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

  // filter movies
  const searchMovies = async () => {
    setPageNumber(1);
    setFilterFlag(true);
    await getMoviesList(pageNumber, releaseDates, dateFilter);
  };

  return (
    <>
      <HomeFilter
        releaseDate={releaseDates}
        setReleaseDate={setReleaseDates}
        showDate={dateFilter}
        setShowDate={setDateFilter}
        searchMovies={searchMovies}
        setFilterFlag={setFilterFlag}
        setPageNumber={setPageNumber}
      />
      <Movies movies={movies} loading={loading} genres={genres} />
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
