import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function LoginErrorPage() {
  return (
    <div>
      <div class="mars"></div>
      <img src="https://assets.codepen.io/1538474/404.svg" class="logo-404" />
      <img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor" />
      <h1 class="title">Oh no!!</h1>
      <h3 class="subtitle">
        Either the UserName  <br /> or Password is not Correct.
        Hit the link to try again!
      </h3>
      <div align="center">
        <a class="btn-back" href="/">
        <Nav.Link href="/">Back to previous page</Nav.Link>
          
        </a>
      </div>
      <img
        src="https://assets.codepen.io/1538474/astronaut.svg"
        class="astronaut"
      />
      <img
        src="https://assets.codepen.io/1538474/spaceship.svg"
        class="spaceship"
      />
    </div>
  );
}
