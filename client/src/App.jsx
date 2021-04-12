import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components
import Login from "./components/login";
import Register from "./components/register";
import homeUsers from "./components/homeUsers";
import VolunteerLogin from "./components/VolunteerLogin";
import VolunteerRegister from "./components/VolunteerRegister";
import HomeVolunteers from "./components/homeVolunteers";
import VolunteerRequestList from "./components/VolunteerRequestList";
import LandingPage from "./components/LandingPage";
import LoginErrorPage from "./components/LoginErrorPage";
import RegisterErrorPage from "./components/RegisterErrorPage";

function App() {
  return (
    <Router>
      <div className="App">
        HIIIIIIIIIIIIIIIIIIIIIIIi
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/sign-in" component={Login} />
          <Route path="/sign-up" component={Register} />
          <Route path="/homeUsers" component={homeUsers} />
          <Route path="/volunteer-sign-in" component={VolunteerLogin} />
          <Route path="/volunteer-sign-up" component={VolunteerRegister} />
          <Route path="/homeVolunteerUsers" component={HomeVolunteers} />
          <Route path="/homeVolunteerUsers" component={VolunteerRequestList} />
          <Route path="/LoginErrorPage" component={LoginErrorPage} />
          <Route path="/RegisterErrorPage" component={RegisterErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
