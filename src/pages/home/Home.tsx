import HomeFilter from "../../components/homeFilter/HomeFilter";
import Movies from "../../components/movies/Movies";
import Pagination from "../../components/pagination/Pagination";

const Home = () => {
  return (
    <>
      <HomeFilter />
      <Movies />
      <Pagination />
    </>
  );
};

export default Home;
