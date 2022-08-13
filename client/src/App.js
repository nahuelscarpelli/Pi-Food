import { Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Landing from './components/Landing'
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Route exact path={"/"} component={Landing} />
      <Route path={"/"} component={NavBar} />
      <Route path={"/home"} component={Cards} />
      <Route path={"/about"} component={About} />
    </div>
  );
}

export default App;
