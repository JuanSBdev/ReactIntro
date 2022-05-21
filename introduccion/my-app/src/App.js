import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome message="hola welcome cambiado del prop" name="Master"/>
      </header>
    </div>
  );
}

export default App;
