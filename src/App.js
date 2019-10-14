import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import { Home, About, Contact} from './components';

const App = () => (
  <div>
    <div className="App">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </div>
);

export default App;
