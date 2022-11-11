import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import OnibusImagem from "../Images/onibus.png";
import {
  Container,
  ImagemOnibus,
  Info,
  OnibusBloco,
  Titulo,
} from "../Styles/StylesOnibus";

const Onibus = () => {
  const listaOnibus = [
    { linha: "271A-10", nome: "Metrô Santana", descricao: "Trajeto rápido" },
    { linha: "121G-10", nome: "Metrô Tucuruvi", descricao: "Trajeto demorado" },
    { linha: "1721-10", nome: "Metrô Carandiru", descricao: "Trajeto médio" },
    { linha: "271A-10", nome: "Metrô Santana", descricao: "Trajeto rápido" },
    { linha: "121G-10", nome: "Metrô Tucuruvi", descricao: "Trajeto demorado" },
    { linha: "1721-10", nome: "Metrô Carandiru", descricao: "Trajeto médio" },
  ];

  return (
    <>
      <NavBar />
      <Titulo>Ônibus disponíveis</Titulo>
      <Container>
        {listaOnibus.map((item, index) => (
          <OnibusBloco key={index}>
            <ImagemOnibus src={OnibusImagem} alt="Imagem de ônibus" />
            <Info>
              <p>
                Linha: <b>{item.linha}</b>
              </p>
              <p>
                Nome: <b>{item.nome}</b>
              </p>
              <p>
                Descrição: <b>{item.descricao}</b>
              </p>
            </Info>
          </OnibusBloco>
        ))}
      </Container>
    </>
  );
};

export default Onibus;
