import styled from "styled-components";

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
`;

export const Nome = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  font-size: 24px;
  line-height: 1;
  color: #ffeba7;
  text-align: center;
  -webkit-text-stroke: 2px #ffeba7;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`;

export const Input = styled.input`
  width: 30em;
  font-size: 16px;
  padding: 0.5em;
  border-radius: 0.5em;
  background-color: #353746;
  color: #ffeba7;
  border-top: #353746 solid;
  border-bottom: #353746 solid;
  border-right: #353746 solid;
  border-left: #353746 solid;

  @media (max-width: 500px) {
    width: 15em;
  }
`;

export const ButtonInput = styled.input`
  width: 8em;
  font-size: 18px;
  color: #ffeba7;
  background-color: #353746;
  margin-top: 2em;
  padding: 0.25em;
  border-radius: 0.5em;
  :hover {
    background-color: #353750;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    width: 10em;
  }
`;
