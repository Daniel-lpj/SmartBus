import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20em;
`;

export const Titulo = styled.h1`
  margin-top: -0.75em;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 96px;
  line-height: 1;
  color: #ffeba7;
  text-align: center;
  -webkit-text-stroke: 2px #ffeba7;
  -webkit-text-fill-color: transparent;
  color: transparent;

  @media (max-width: 500px) {
    margin-top: -2.5em;
    font-size: 46px;
  }
`;
