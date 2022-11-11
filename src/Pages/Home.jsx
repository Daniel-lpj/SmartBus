import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { Container, Titulo } from "../Styles/StylesHome";

const Home = () => {
  return (
    <Container>
      <NavBar />
      <Titulo>Smart bus</Titulo>
    </Container>
  );
};

export default Home;
