import "./Login.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { alertaError, alertaRedireccion } from "../helpers/funciones";
let urlEnvios = "https://back-json-server-jueves.onrender.com/envios";

const ListarEnvios = () => {
  const [envios, setEnvios] = useState([]);
  function getEnvios() {
    fetch(urlEnvios)
      .then((response) => response.json())
      .then((data) => setEnvios(data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getEnvios();
  }, []);

  function filtrarEnviosUsuario() {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let filtrado = envios.filter((item) => item.usuarioId == usuario.id);
    console.log(filtrado);
    return filtrado;
  }
  let enviosUsuario = filtrarEnviosUsuario();
  function eliminarEnvio(id) {
    fetch(urlEnvios + "/" + id, {
      method: "DELETE",
    })
      .then(() => getEnvios())
      .catch((error) => alertaError("Funcionalidad no implementada"));
  }
  return (
    <div className="cards">
      {enviosUsuario.length > 0 ? (
        enviosUsuario.map((item) => (
          <div className="card">
            <h3>Origen: {item.origen}</h3>
            <h3>Destino: {item.destino}</h3>
            <h3>Fecha: {item.fecha_envio}</h3>
            <h3>Estado: {item.estado}</h3>
            <div className="card__buttons">
              <button
                onClick={() => eliminarEnvio(item.id)}
                type="button"
                className="card__button"
              >
                Eliminar
              </button>
              <Link className="card__button">Editar</Link>
            </div>
          </div>
        ))
      ) : (
        <h2>El usuario aún no tiene envios registrados</h2>
      )}
    </div>
  );
};

export default ListarEnvios;
