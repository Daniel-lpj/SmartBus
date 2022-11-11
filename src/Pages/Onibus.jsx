import React from "react";
import OnibusImagem from "../Images/onibus.png";
import {
  Container,
  ImagemOnibus,
  Info,
  OnibusBloco,
  Titulo,
} from "../Styles/StylesOnibus";

const Onibus = () => {
  return (
    <>
      <Titulo>Ônibus disponíveis</Titulo>
      <Container>
        <OnibusBloco>
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
        </OnibusBloco>
        <OnibusBloco>
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
        </OnibusBloco>
        <OnibusBloco>
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
        </OnibusBloco>
        <OnibusBloco>
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
        </OnibusBloco>
        <OnibusBloco>
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
        </OnibusBloco>
        <OnibusBloco>
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
        </OnibusBloco>
      </Container>
    </>
  );
};

export default Onibus;
