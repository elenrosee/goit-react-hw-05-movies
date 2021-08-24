import { useState, useEffect, Fragment } from "react";
//
import HomePage from "./components/HomePage";
import Container from "./components/Container";
import NavigationBar from "./components/NavigationBar";

export default function App() {
  return (
    <Fragment>
      <Container>
        <NavigationBar />
        <HomePage />
      </Container>
    </Fragment>
  );
}
