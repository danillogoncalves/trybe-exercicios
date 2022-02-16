import logo from './logo.svg';
import './App.css';

const textJSX = 'Hello, JSX';
const element = <h1>{textJSX}</h1>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{element}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;
