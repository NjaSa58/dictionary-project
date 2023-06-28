import logo from "./logo sheCodes.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {/* img-fluid = full screen */}
          <img src={logo} alt="logo" className="App-logo img-fluid" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Sanja Plazonic and hosted on&nbsp;
            <a
              href="https://github.com/NjaSa58/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
