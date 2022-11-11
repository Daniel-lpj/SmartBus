import React from "react";
import { Route, Routes as CustomRoutes } from "react-router-dom";
import Home from "../Pages/Home";
import Itinerario from "../Pages/Itinerario";
import Login from "../Pages/login";
import Onibus from "../Pages/Onibus";

const Routes = () => (
  <CustomRoutes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/onibus" element={<Onibus />} />
    <Route path="/itinerario" element={<Itinerario />} />
  </CustomRoutes>
);

export default Routes;
