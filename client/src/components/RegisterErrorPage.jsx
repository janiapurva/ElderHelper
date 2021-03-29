import React from "react";
import {Nav} from "react-bootstrap";

export default function LoginErrorPage() {
  return (
    <div>
      <div class="mars"></div>
      <img src="https://assets.codepen.io/1538474/404.svg" class="logo-404" />
      <img src="https://assets.codepen.io/1538474/meteor.svg" class="meteor" />
      <h1 class="title">Oh no!!</h1>
      <h3 class="subtitle">
        OOPS, registration issue - the email you are trying to use already exists or there is another problem <br /> Please try again or:.
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
