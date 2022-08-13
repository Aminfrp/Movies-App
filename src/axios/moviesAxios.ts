import axios from "axios";
import { ICredits, IGenres, IMovies, ISingleMovie } from "../interfaces/movies";
import { apiKey, baseUrl } from "../utails";

const instance = axios.create({
  baseURL: `${baseUrl}/`,
  params: { api_key: apiKey },
});

const apis = {
  // get all movies
  getMovies: (
    pageNumber: number,
    releaseDate?: Date[],
    dateFilter?: boolean
  ) => {
    if (dateFilter && releaseDate?.length)
      return instance.get<IMovies>(`discover/movie`, {
        params: {
          page: pageNumber,
          "release_date.lte": releaseDate[1],
          "release_date.gte": releaseDate[0],
        },
      });
    return instance.get<IMovies>(`discover/movie`, {
      params: { page: pageNumber },
    });
  },
  // get single movie
  getSingleMovie: (movieId: number) => {
    return instance.get<ISingleMovie>(`/movie/${movieId}`);
  },
  // get all credits
  getMovieCredits: (movieId: number) => {
    return instance.get<ICredits>(`/movie/${movieId}/credits`);
  },
  // get all genres
  getGenres: () => {
    return instance.get<IGenres>(`/genre/movie/list`);
  },
};

export default apis;
