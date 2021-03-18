import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import NavBar from "./components/NavBarLoggedOut";
import Login from "./components/login";
import Register from "./components/register";
import homeUsers from "./components/homeUsers";
import MasterNavbar from "./components/MasterNavbar";

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={homeUsers} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={Register} />
          <Route path="/homeUsers" component={homeUsers} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
