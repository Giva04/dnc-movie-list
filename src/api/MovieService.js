// confirguranbdo as // API´s
import axios from "axios";
              // endereço da API
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "c1eaa6b5b3f0dbf9c39b3322f7552ffe";

// função string que retorna o endPoint dinamico
const withBaseUrl = (path) =>`${BASE_URL}${path}?api_key=${API_KEY}` ;

// criando o Service Movie
export class MovieService {
    // getMovies é o metado que retorna os dados e os filmes API
    // Static serve para que so recebemos os dados quando chamado pelo MovieService
    static getMovies(){
        return axios(withBaseUrl("movie/popular"));
        //retorna os filmes mais populares
    }
        //precisamos passar o id para ele chamar o id od filme especifico
    static getMovieDetails(id){
        return axios(withBaseUrl(`movie/${id}`));
        //retorna o detalhe do filme pelo usando o id
    }
        // retorna o filme pesquisados ,concatemos as strings para ter uma respota dinamica usando
        // `&query=${nome da variavel , mesmo usado no searcMovie inicio da função}`
    static searchMovies(movie){
        return axios(withBaseUrl("search/movie") + `&query=${movie}`);
    }
}




