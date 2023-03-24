   // criando o imput de pesquisa de filmes
// props é a propriedade que passara o
const Header = (props) => {
  //handkeSubimit , vai enviar a busca pela pesquisa
  function handleSubmit(event) {
    //event.preventDefult prefini que a pagina seja recarregada quando pesquisada
    event.preventDefault();
    // imput
    const searchValue = event.target[0].value;
    //quando passar onSubimit props pega os valores
    props.onSubmit(searchValue);
    //limpar a pesquisa
    event.target[0].value = "";
    console.log(searchValue)
  }

  return (
    <header className="Header">
      <h1>DNC Movie List</h1>
      {/* CallBack com parametro para busca */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pesquise por filmes" />
      </form>
    </header>
  );
};

export default Header;