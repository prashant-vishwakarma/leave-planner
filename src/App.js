import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Leave Planner</p>
        <p>Please Upload an export File or <a>Continue Afresh</a></p>
      </header>
    </div>
  );
}

export default App;
