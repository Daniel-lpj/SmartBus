import styled from "styled-components";

export const Titulo = styled.h1`
  margin-top: 1.5em;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 48px;
  line-height: 1;
  color: #ffeba7;
  text-align: center;
  -webkit-text-stroke: 2px #ffeba7;
  -webkit-text-fill-color: transparent;
  color: transparent;

  @media (max-width: 500px) {
    font-size: 24px;
    font-weight: 800;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const OnibusBloco = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1em;
  p {
    @media (max-width: 500px) {
      font-size: 10px;
    }
  }
`;

export const ImagemOnibus = styled.img`
  width: 20em;
  height: 20em;

  @media (max-width: 500px) {
    width: 10em;
    height: 10em;
  }
`;
