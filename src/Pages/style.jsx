import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 5em;
`;

export const ImagemOnibus = styled.img`
  width: 24em;
  height: 24em;
`;

export const Bloco = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  z-index: 6;
  text-align: center;
  transform: translateY(-50%);
`;

export const Titulo = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 48px;
  line-height: 1;
  color: #ffeba7;
  text-align: center;
  -webkit-text-stroke: 2px #ffeba7;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 13em;
`;

export const Label = styled.label`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const Input = styled.input`
  font-size: 16px;
  width: 50em;
  padding: 0.5em;
  border-radius: 0.5em;
  background-color: #353746;
  color: #ffeba7;
  border-top: #353746 solid;
  border-bottom: #353746 solid;
  border-right: #353746 solid;
  border-left: #353746 solid;
`;

export const ButtonInput = styled.input`
  font-size: 18px;
  width: 10em;
  color: #ffeba7;
  background-color: #353746;
  margin-top: 2em;
  padding: 0.25em;
  border-radius: 0.5em;
  :hover {
    background-color: #353750;
    cursor: pointer;
  }
`;
