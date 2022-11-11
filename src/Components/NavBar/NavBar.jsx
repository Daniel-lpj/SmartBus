import React from "react";
import { Container, Navegacao } from "./styles";

const NavBar = () => {
  return (
    <Container>
      <Navegacao>
        <a href="/home">HOME</a>
        <a href="/onibus">ÔNIBUS</a>
        <a href="/itinerario">ITINERÁRIO</a>
      </Navegacao>
    </Container>
  );
};

export default NavBar;
