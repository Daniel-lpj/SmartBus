import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ImagemFundo } from "./Components/ImagemFundo/styles";
import Routes from "./Routes/routes";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import "./reset.css";

const App = () => (
  <BrowserRouter>
    <ImagemFundo>
      <NavBar />
      <Routes />
      <Footer />
    </ImagemFundo>
  </BrowserRouter>
);

export default App;
