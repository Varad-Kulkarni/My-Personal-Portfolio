import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

import Navigatebar from './components/Navigatebar/Navigatebar';
import AllRoutes from './AllRoutes'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}

      <Router>
        <Navigatebar />
        <AllRoutes />
        <Contact />
      </Router>

      
    </div>
  );
}

export default App;
