
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Crafting your Vision, Perfecting Spaces
        </h1>
        <p className="App-link">
          No Sub Contractors - All In House Crew
        </p>
      </header>
      <h1>Welcome to my app</h1>
        <MyButton />
    </div>
  );
}

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

export default App;
