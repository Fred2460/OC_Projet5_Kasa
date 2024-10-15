import logo from '../assets/logo.svg';
import '../styles/Accueil.css';

function Accueil() {
  return (
    <div className="Accueil">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload OC_Projet5_Kasa.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Accueil;
