import React from "react";

const Itinerario = () => {
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

      <div className="section-center">
        <h1 className="mb-0">Em breve...</h1>
      </div>
    </div>
  );
};

export default Itinerario;
