export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovies {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

interface ICollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface IGanre {
  id: number;
  name: string;
}

interface ICountries {
  iso_3166_1: number;
  name: string;
}

interface ICompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ILanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface ISingleMovie {
  adult: boolean;
  backdrop_path: string;
  homepage: string;
  belongs_to_collection: ICollection;
  budget: number;
  genres: IGanre[];
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ICompanies[];
  production_countries: ICountries[];
  spoken_languages: ILanguages[];
  release_date: string;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
}
