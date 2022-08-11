import axios from "axios";
import { IMovies } from "../interfaces/movies";
import { apiKey, baseUrl } from "../utails";

const instance = axios.create({baseURL:`${baseUrl}/`,params:{api_key:apiKey}});

const apis =  {
    getMovies : (pageNumber:number) => {
        return pageNumber===1?instance.get<IMovies>(`discover/movie`):instance.get<IMovies>(`discover/movie`,{params:{page:pageNumber}})
    }
}

export default apis;