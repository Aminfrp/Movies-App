import { IMovies } from "../../interfaces/movies";
import LoadingMovie from "./movie/LoadingMovie";
import Movie from "./movie/Movie";

interface Props {
  movies: IMovies | null;
  loading: boolean;
}

const Movies = (props: Props) => {
  return (
    <div className="mx-[208px] grid grid-cols-3 gap-10 mb-[161px]">
      {props.loading
        ? [...Array(20)].map((_, key) => <LoadingMovie key={key} />)
        : props.movies?.results.map((movie, index) => (
            <Movie
              key={index}
              title={movie.title}
              imageUrl={movie.poster_path}
              releaseDate={movie.release_date}
              to={`/details/${movie.id}`}
            />
          ))}
    </div>
  );
};

export default Movies;
