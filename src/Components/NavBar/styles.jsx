import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0;
  background-color: #292929;
  overflow: hidden;
`;

export const Navegacao = styled.nav`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 450px;
  transform: translateY(-50%);

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    height: auto;
    width: auto;
  }

  a {
    position: relative;
    width: 33.333%;
    display: table-cell;
    text-align: center;
    color: #949494;
    text-decoration: none;
    font-size: 24px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
    padding: 10px 20px;
    transition: 0.2s ease color;
  }

  a:before,
  a:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.2s ease transform;
  }

  a:before {
    top: 0;
    left: 10px;
    width: 6px;
    height: 6px;
  }

  a:after {
    top: 5px;
    left: 18px;
    width: 4px;
    height: 4px;
  }

  a:nth-child(1):before {
    background-color: yellow;
  }

  a:nth-child(1):after {
    background-color: red;
  }

  a:nth-child(2):before {
    background-color: #00e2ff;
  }

  a:nth-child(2):after {
    background-color: #89ff00;
  }

  a:nth-child(3):before {
    background-color: purple;
  }

  a:nth-child(3):after {
    background-color: palevioletred;
  }

  a:hover {
    color: #fff;
  }

  a:hover:before,
  a:hover:after {
    transform: scale(1);
  }

  a:nth-child(1):hover ~ #indicator {
    background: linear-gradient(130deg, yellow, red);
  }

  a:nth-child(2):hover ~ #indicator {
    left: 34%;
    background: linear-gradient(130deg, #00e2ff, #89ff00);
  }

  a:nth-child(3):hover ~ #indicator {
    left: 70%;
    background: linear-gradient(130deg, purple, palevioletred);
  }

  #indicator {
    position: absolute;
    left: 5%;
    bottom: 0;
    width: 30px;
    height: 3px !important;
    background-color: #fff;
    border-radius: 5px;
    transition: 0.2s ease left;
  }
`;
