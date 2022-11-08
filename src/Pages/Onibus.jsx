import React from "react";
import OnibusImagem from "../Images/onibus.png";
import { Container, ImagemOnibus, Info, Titulo } from "./style";

const Onibus = () => {
  return (
    <div>
      <input
        className="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label htmlFor="menu-icon"></label>

      <nav className="nav">
        <ul className="pt-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/onibus">Ônibus</a>
          </li>
          <li>
            <a href="/itinerario">Itinerário</a>
          </li>
        </ul>
      </nav>

      <Titulo>Ônibus disponíveis</Titulo>

      <Container>
        <ImagemOnibus src={OnibusImagem} alt="Imagem de ônibus" />
        <Info>
          <p>
            Linha: <b>271-A(10)</b>
          </p>
          <p>
            Nome: <b>Metrô Santana</b>
          </p>
          <p>
            Linha: <b>271-A(10)</b>
          </p>
        </Info>
        <ImagemOnibus src={OnibusImagem} alt="Imagem de ônibus" />
        <Info>
          <p>
            Linha: <b>121-G(10)</b>
          </p>
          <p>
            Nome: <b>Metrô Tucuruvi</b>
          </p>
          <p>
            Linha: <b>121-G(10)</b>
          </p>
        </Info>
        <ImagemOnibus src={OnibusImagem} alt="Imagem de ônibus" />
        <Info>
          <p>
            Linha: <b>1721(10)</b>
          </p>
          <p>
            Nome: <b>Metrô Carandiru</b>
          </p>
          <p>
            Linha: <b>1721(10)</b>
          </p>
        </Info>
      </Container>
      <Container>
        <ImagemOnibus src={OnibusImagem} alt="Imagem de ônibus" />
        <Info>
          <p>
            Linha: <b>271-A(10)</b>
          </p>
          <p>
            Nome: <b>Metrô Santana</b>
          </p>
          <p>
            Linha: <b>271-A(10)</b>
          </p>
        </Info>
        <ImagemOnibus src={OnibusImagem} alt="Imagem de ônibus" />
        <Info>
          <p>
            Linha: <b>121-G(10)</b>
          </p>
          <p>
            Nome: <b>Metrô Tucuruvi</b>
          </p>
          <p>
            Linha: <b>121-G(10)</b>
          </p>
        </Info>
        <ImagemOnibus src={OnibusImagem} alt="Imagem de ônibus" />
        <Info>
          <p>
            Linha: <b>1721(10)</b>
          </p>
          <p>
            Nome: <b>Metrô Carandiru</b>
          </p>
          <p>
            Linha: <b>1721(10)</b>
          </p>
        </Info>
      </Container>
    </div>
  );
};

export default Onibus;
