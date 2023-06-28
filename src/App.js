import logo from "./logo sheCodes.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* img-fluid = full screen */}
        <img src={logo} alt="logo" className="App-logo img-fluid" />
      </header>
    </div>
  );
}
