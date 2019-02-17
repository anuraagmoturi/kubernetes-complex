import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
      
            <Link to="/">Home</Link> <br />
            <Link to="/other">Other Page</Link>
       
          <Route exact path="/" component={Fib} />
          <Route exact path="/other" component={OtherPage} />
        </div>
      </Router>

    );
  }
}

export default App;
