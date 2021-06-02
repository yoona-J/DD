import './App.css';

// L20
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, false)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/test" component={Auth(TestPage, false)} />
          <Route exact path="/howto" component={Auth(HowToPage, false)} />
          <Route exact path="/help" component={Auth(HelpPage, false)} />
        </Switch>
      </div>
    </Router>



  );
}

export default App;
