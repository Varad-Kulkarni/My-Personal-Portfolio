import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

import Navigatebar from './components/Navigatebar/Navigatebar';
import AllRoutes from './AllRoutes'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigatebar />
        <AllRoutes />
        <Contact />
      </Router>
    </div>
  );
}

export default App;
