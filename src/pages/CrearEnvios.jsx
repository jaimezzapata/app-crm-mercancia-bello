import { useState } from "react";
import { alertaError, alertaRedireccion } from "../helpers/funciones";
import { useNavigate } from "react-router-dom";
let urlEnvios = "https://back-json-server-jueves.onrender.com/envios";
const CrearEnvios = () => {
  const [getOrigen, setOrigen] = useState("");
  const [getDestino, setDestino] = useState("");
  const [getFecha, setFecha] = useState("");
  const [getEstado, setEstado] = useState("");
  let redireccion = useNavigate();

  function crearEnvio() {
    let nuevoEnvio = {
      usuarioId: JSON.parse(localStorage.getItem("usuario")).id,
      fecha_envio: getFecha,
      origen: getOrigen,
      destino: getDestino,
      estado: getEstado,
    };
    fetch(urlEnvios, {
      method: "POST",
      body: JSON.stringify(nuevoEnvio),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alertaRedireccion(
          redireccion,
          "/home/listar-envios",
          "Envío creado correctamente"
        );
      })
      .catch((error) => {
        alertaError("Error al crear el envío: " + error.message);
      });
  }

  return (
    <form className="form">
      Registrar Envío
      <input
        onChange={(e) => setOrigen(e.target.value)}
        type="text"
        className="input"
        placeholder="Origen"
      />
      <input
        onChange={(e) => setDestino(e.target.value)}
        type="text"
        className="input"
        placeholder="Destino"
      />
      <input
        onChange={(e) => setFecha(e.target.value)}
        type="date"
        className="input"
        placeholder="Fecha"
      />
      <input
        onChange={(e) => setEstado(e.target.value)}
        type="text"
        className="input"
        placeholder="Estado"
      />
      <button onClick={crearEnvio} type="button">
        Submit
      </button>
    </form>
  );
};

export default CrearEnvios;
