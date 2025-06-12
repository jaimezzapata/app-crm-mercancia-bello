import { alertaRedireccion } from "../helpers/funciones";
import { useNavigate, Link } from "react-router-dom";

const MenuLateral = () => {
  let usuarioLogeado = JSON.parse(localStorage.getItem("usuario"));
  console.log(usuarioLogeado);
  let redireccion = useNavigate();
  function cerrarSesion() {
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
    alertaRedireccion(redireccion, "/", "Cerrando sesión");
  }
  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">
        Track{" "}
        <span className="aplicacion__menu-lateral-logo--resaltado">X</span>
      </h1>
      <h2>Usuario: {usuarioLogeado.nombre}</h2>
      <img
        className="aplicacion__menu-lateral-logo-imagen"
        src="/logo.jpg"
        alt="Logo"
      />
      <nav className="aplicacion__menu-lateral-navegacion">
        <Link className="aplicacion__menu-lateral-navegacion-item" to="/home/">
          Inicio
        </Link>
        <Link
          className="aplicacion__menu-lateral-navegacion-item"
          to="crear-envios"
        >
          Crear Envios
        </Link>
        <Link
          className="aplicacion__menu-lateral-navegacion-item"
          to="listar-envios"
        >
          Listar Envios
        </Link>
        <button
          onClick={cerrarSesion}
          type="button"
          className="aplicacion__menu-lateral-navegacion-item"
        >
          Cerrar sesión
        </button>
      </nav>
    </aside>
  );
};

export default MenuLateral;
