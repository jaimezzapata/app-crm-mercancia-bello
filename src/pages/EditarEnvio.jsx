import { useState, useEffect } from "react";
import { alertaError, alertaRedireccion } from "../helpers/funciones";
import { useNavigate, useParams } from "react-router-dom";
let urlEnvios = "https://back-json-server-jueves.onrender.com/envios";

const EditarEnvio = () => {
  const [getOrigen, setOrigen] = useState("");
  const [getDestino, setDestino] = useState("");
  const [getFecha, setFecha] = useState("");
  const [getEstado, setEstado] = useState("");
  let id = useParams().id;
  let redireccion = useNavigate();

  function getEnvioId() {
    fetch(urlEnvios + "/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOrigen(data.origen);
        setDestino(data.destino);
        setFecha(data.fecha_envio);
        setEstado(data.estado);
      });
  }
  
  useEffect(() => {
    getEnvioId();
  }, []);

  function modificarEnvio() {
    let nuevoEnvio = {
      fecha_envio: getFecha,
      origen: getOrigen,
      destino: getDestino,
      estado: getEstado,
    };
    fetch(urlEnvios + "/" + id, {
      method: "PATCH",
      body: JSON.stringify(nuevoEnvio),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alertaRedireccion(
          redireccion,
          "/home/listar-envios",
          "Envío editado correctamente"
        );
      })
      .catch((error) => {
        alertaError("Error al editar el envío: " + error.message);
      });
  }

  return (
    <form className="form">
      Editar Envío
      <input
        value={getOrigen}
        onChange={(e) => setOrigen(e.target.value)}
        type="text"
        className="input"
        placeholder="Origen"
      />
      <input
        value={getDestino}
        onChange={(e) => setDestino(e.target.value)}
        type="text"
        className="input"
        placeholder="Destino"
      />
      <input
        value={getFecha}
        onChange={(e) => setFecha(e.target.value)}
        type="date"
        className="input"
        placeholder="Fecha"
      />
      <input
        value={getEstado}
        onChange={(e) => setEstado(e.target.value)}
        type="text"
        className="input"
        placeholder="Estado"
      />
      <button onClick={modificarEnvio} type="button">
        Submit
      </button>
    </form>
  );
};

export default EditarEnvio;
