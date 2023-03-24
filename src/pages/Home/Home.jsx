import { useEffect, useState } from "react";
import { MovieService } from "../../api/MovieService";
import MovieCard from "../../components/MovieCard/MovieCard";

// extruturando os cards
                //searchValueProp chama o caminho digtado no input 
  const Home = ({searchValueProp}) => {
  //varialvel (movies) de estado que atualiza quando chamada
  const [movies, setMovies] = useState([]);
  

  //função asincrona que busca os dados dos filmes
  // para desetruturar o objeto usamos {data}com a variavel dentro, podemos reperti em 2 objetos {results}.
  async function getMovies() {
    const {data:{results},
   } = await MovieService.getMovies();
    //para jogar os dados da varivel dentro do elemento Movie
    setMovies(results);
  }

  // criando função para receber dados da pesquisa

  async function getMoviesSearch(movieString) {
    const {
      data:{results},
  } = await MovieService.searchMovies(movieString);
    

     setMovies(results);
  }

  //para executar uma função usamos o useEffect
    useEffect(() => {
      getMovies();       
    }, []);

    //para acompanhar as mudanças de estado da VAR chamamos o useEffect sem o parametro
    useEffect(() => {
        // if condição para string vazia ou null ,considera False
        if (searchValueProp){
          getMoviesSearch(searchValueProp);
        }
        //verificando se a search esta vazia voltar p/ inicio
        if (searchValueProp === "" ) {
            getMovies(getMovies);
          }
        
    }, [searchValueProp]);

    //chamando VAR Movie no HTML usando arraw function e passando CallBack 
  return ( 
           // pai home
    <section className="Home">
        {movies.map((movie) => (
          <div key={movie.id}>
            {/* filho moviecard, criando propriedade Movie para passar os cards dos filmes */}
            <MovieCard movieProp={movie}/>
          </div>
        
            /* desestruturando objeto map
    {movies.map(({id, title, vote_average}) => (
      <div key={id}>
        <h1>{title}</h1>
        <h2>{vote_average}</h2>
      </div>   */
      
       ))}
  </section>
  );
};

export default Home;
