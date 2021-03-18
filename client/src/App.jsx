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
import VolunteerLogin from "./components/VolunteerLogin"
import VolunteerRegister from "./components/VolunteerRegister"
import HomeVolunteers from"./components/homeVolunteers"
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
          <Route path="/volunteer-sign-in" component={VolunteerLogin} />
          <Route path="/volunteer-sign-up" component={VolunteerRegister} />
          <Route path="/homeVolunteerUsers" component={HomeVolunteers} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
