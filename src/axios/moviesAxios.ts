import axios from "axios";
import { IMovies } from "../interfaces/movies";
import { apiKey, baseUrl } from "../utails";

const instance = axios.create({baseURL:`${baseUrl}/`,params:{api_key:apiKey}});

const apis =  {
    getMovies : (pageNumber:number,releaseDate?:Date[],dateFilter?:boolean) => {        
        if(dateFilter && releaseDate?.length) return instance.get<IMovies>(`discover/movie`,{params:{page:pageNumber,"release_date.lte":releaseDate[1],"release_date.gte":releaseDate[0]}});
        return instance.get<IMovies>(`discover/movie`,{params:{page:pageNumber}})
    }
}

export default apis;