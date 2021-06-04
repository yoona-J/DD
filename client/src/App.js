import './App.css';
import React from 'react';
//import Weather from './components/Weather';

// L20
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import TestPage from './components/views/TestPage/TestPage'
import NavBar from './components/views/NavBar/NavBar'
import HowToPage from './components/views/HowtoPage/HowToPage'
import HelpPage from './components/views/HelpPage/HelpPage'
import Auth from './hoc/auth'



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>



    // L20
    <Router>
      <div>
          {/* <ul>
            <li>
              <Link to="/">MAIN</Link>
            </li>
            <li>
              <Link to="/HowTo">HOW_TO</Link>
            </li>
            <li>
              <Link to="/help">HELP</Link>
            </li>
          </ul> */}

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

        <hr />
        <NavBar/>
        <hr />
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, null)} />
          <Route exact path="/register" component={Auth(RegisterPage, null)} />
          <Route exact path="/test" component={Auth(TestPage, null)} />
          <Route exact path="/howto" component={Auth(HowToPage, null)} />
          <Route exact path="/help" component={Auth(HelpPage, null)} />
        </Switch>
      </div>
    </Router>



  );
}

export default App;
