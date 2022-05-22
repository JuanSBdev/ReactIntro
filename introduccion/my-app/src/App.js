import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About-me';
import Profile from './pages/Profile';
import Semaforo from './pages/Semaforo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome message="hola welcome cambiado del prop" name="Master"/>
        <Router>
          <div>
            <ul>
                <li>
                <Link to ="/">Casa</Link>
                </li>
                <li>
                  <Link to='/contact'>Contacto</Link>
                </li>
                <li>
                  <Link to='/about'>About ME</Link>
                </li>
                <li>
                  <Link to='/profile'>Profile</Link>
                </li>
                <li>
                  <Link to='/semaforo'>Semaforo</Link>
                </li>
            </ul>
          </div>
          <Routes>
            <Route path='/contact' element={ <Contact />}/>
            <Route path='/about' element={ <About />}/>
            <Route path='/profile/:name' element={ <Profile />}/>
            <Route path='/semaforo' element={ <Semaforo />}/>
              
          </Routes>

        </Router>
      </header>
    </div>
  );
}

export default App;
