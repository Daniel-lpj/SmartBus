import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ButtonInput, Formulario, Input, Nome } from "../Styles/StylesLogin";
import { Titulo } from "../Styles/StylesOnibus";

const Login = () => {
  const api = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    baseURL: `http://localhost:8080/gs/rest`?.toString(),
  });
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    (async () => {
      e.preventDefault();
      try {
        await api
          .post(`/login`, {
            ds_nome: nome,
            ds_senha: senha,
          })
          .then((result) => {
            if (result.status === 201) {
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
      <Titulo>Faça seu login</Titulo>
      <Formulario onSubmit={(e) => handleLogin(e)}>
        <label>
          <Nome>Nome: </Nome>
          <Input
            name="nome"
            required
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label>
          <Nome>Senha: </Nome>
          <Input
            name="senha"
            required
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <ButtonInput type="submit" />
      </Formulario>
    </>
  );
};

export default Login;
