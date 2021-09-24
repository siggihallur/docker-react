import logo from './logo.svg';
import './App.css';



function App() {
  const hStyle = { color: 'blue' };
  return (
    <div className="App">
      <header className="App-header">
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
        <div>
          <h1>This is me now! Hoo ha</h1>
          <p style={{ color: 'orangered'}}>How are you doin</p>
          <p style={ hStyle }>How to add some color in here? Really?</p>
        </div>
      </header>
    </div>
  );
}

export default App;
