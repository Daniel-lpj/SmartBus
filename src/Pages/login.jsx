import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonInput, Formulario, Input, Label, Nome, Titulo } from "./style";

import axios from "axios";

const Login = () => {
  const api = axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    baseURL: `http://localhost:8080/InfoJobs/rest`?.toString(),
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
            nome: nome,
            senha: senha,
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

      <Titulo>Faça seu login</Titulo>

      <Formulario onSubmit={(e) => handleLogin(e)}>
        <Label>
          <Nome>Nome: </Nome>
          <Input
            name="nome"
            required
            onChange={(e) => setNome(e.target.value)}
          />
        </Label>
        <Label>
          <Nome>Senha: </Nome>
          <Input
            name="senha"
            required
            onChange={(e) => setSenha(e.target.value)}
          />
        </Label>
        <ButtonInput type="submit" />
      </Formulario>
    </div>
  );
};

export default Login;
