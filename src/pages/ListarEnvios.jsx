import "./Login.css";
import { useEffect, useState } from "react";
import { alertaError, alertaRedireccion } from "../helpers/funciones";
let urlEnvios = "https://back-json-server-jueves.onrender.com/envios";

const ListarEnvios = () => {
  const [envios, setEnvios] = useState([]);
  return <div>ListarEnvios</div>;
};

export default ListarEnvios;
