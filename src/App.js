import { useContext } from 'react';
import './App.css';
import Jatekter from './components/Jatekter';
import { KattContext } from './contexts/KattContext';

function App() {
  const {lista}=useContext(KattContext)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Új Tic Tac Toe!!!!</h1>
      </header>
      <main>
        <article>
            <Jatekter list = {lista}/>
        </article>
      </main>
    </div>
  );
}

export default App;
