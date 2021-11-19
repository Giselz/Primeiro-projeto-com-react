import './App.css';
import Card from './components/Card'
import Titulo from './components/Titulo'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo text="Meu primeiro projeto React do zero" />
        <h3>Um pouco sobre as pancs 🌱</h3>
        <p> Plantas Alimentícias Não Convencionais (conhecidas como PANCs são plantas comestíveis que surgem de forma espontânea em quintais, terrenos baldios e canteiros, mas que não são consumidas por falta de costume ou de conhecimento. Conheça alguns tipos e se abra às possibilidades ✨</p>
        <Card/>
      </header>
    </div>
  );
}

export default App;
