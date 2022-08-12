import { IMovies } from "../../interfaces/movies";

interface Props {
  movies: IMovies | null;
  handleNextPage: () => void;
  previusNextPage: () => void;
  skip: { start: number; end: number };
}

const Pagination = (props: Props) => {
  const { movies, handleNextPage, previusNextPage, skip } = props;

  return (
    <div className="flex flex-col items-center mb-[90px]">
      {/* pagination */}
      <div className="flex">
        <p
          className={`font-[700]  ${
            movies?.page !== 1
              ? "text-[#318FE7] hover:cursor-pointer"
              : "text-[#0000007A]"
          }`}
          onClick={previusNextPage}
        >
          Previous Page
        </p>
        {/* divider */}
        <span
          style={{ borderLeft: "1px solid black", width: 0.1 }}
          className="mx-[30px]"
        ></span>
        <p
          className={`font-[700] ${
            movies?.page !== movies?.total_pages && movies?.page !== 500
              ? "text-[#318FE7] hover:cursor-pointer"
              : "text-[#0000007A]"
          }`}
          onClick={handleNextPage}
        >
          Next Page
        </p>
      </div>
      {/* total */}
      <p className="mt-[14px] text-[#989898]">
        Showing results {skip.start}-{skip.end}
      </p>
    </div>
  );
};

export default Pagination;
