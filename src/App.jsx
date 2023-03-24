import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home.jsx";
import MovieDetail from './pages/MovieDetail/MovieDetail';

function App() {
  // variavel que vira string que recebe o valor da pesquisa
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="App" style={{backgroundColor:"#303030"}}>
      {/* header é componente fixo */}
      {/* onSubmit busca o iten pesquisado */}
      <Header onSubmit ={(inputValue) => setSearchValue(inputValue) } />
      {/* dentro do Routes passaram as rotas */}
      <Routes>
                {/* rota que recebe o valor do searchValue na home */}
        <Route path="/" element={ <Home searchValueProp = {searchValue} />}/>
        <Route path="/movie/:id" element={<MovieDetail/>} />
          
      </Routes>
    </div>
  )
}

export default App

// Outlet carrega a rota filho
// Header é fixo , por isso importamos no App (rota padrão)