import React, { useState } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar/NavBar";
import {
  ButtonInput,
  Formulario,
  Input,
  Nome,
} from "../Styles/StylesItinerario";
import { Titulo } from "../Styles/StylesOnibus";
import { useNavigate } from "react-router-dom";

const Itinerario = () => {
  const navigate = useNavigate();
  const api = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    baseURL: `http://localhost:8080/gs/rest`?.toString(),
  });

  const [nome, setNome] = useState("");
  const [linha, setLinha] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleItinerario = (e) => {
    (async () => {
      e.preventDefault();
      try {
        await api
          .post(`/itinerario`, {
            ds_nome: nome,
            ds_linha: linha,
            ds_descricao: descricao,
          })
          .then((result) => {
            if (result.status === 201) {
              alert("Agradecemos pela sugestão!");
              navigate("/home");
            }
          });
      } catch {
        console.log("Error");
      }
    })();
  };

  return (
    <>
      <NavBar />
      <Titulo>Sugerir itinerário</Titulo>
      <Formulario onSubmit={(e) => handleItinerario(e)}>
        <label>
          <Nome>Nome: </Nome>
          <Input name="nome" onChange={(e) => setNome(e.target.value)} />
        </label>
        <label>
          <Nome>Linha: </Nome>
          <Input name="linha" onChange={(e) => setLinha(e.target.value)} />
        </label>
        <label>
          <Nome>Descrição: </Nome>
          <Input
            name="descricao"
            onChange={(e) => setDescricao(e.target.value)}
          />
        </label>
        <ButtonInput type="submit" />
      </Formulario>
    </>
  );
};

export default Itinerario;
