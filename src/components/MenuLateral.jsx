import { alertaRedireccion } from "../helpers/funciones"
import { useNavigate } from "react-router-dom"

const MenuLateral = () => {
  let usuarioLogeado = localStorage.getItem("usuario")
  let redireccion = useNavigate()
  function cerrarSesion() {
    localStorage.removeItem("usuario")
    localStorage.removeItem("token")
    alertaRedireccion(redireccion, '/', "Cerrando sesión")
  }
  return (
    <aside className="aplicacion__menu-lateral">
      <h1 className="aplicacion__menu-lateral-logo">Track <span className="aplicacion__menu-lateral-logo--resaltado">X</span></h1>
      <h2>Usuario: {usuarioLogeado}</h2>
      <img className="aplicacion__menu-lateral-logo-imagen" src="/logo.jpg" alt="Logo" />
      <nav className="aplicacion__menu-lateral-navegacion">
        <a className="aplicacion__menu-lateral-navegacion-item" href="">Inicio</a>
        <a className="aplicacion__menu-lateral-navegacion-item" href="">Gestión de envíos</a>
        <a className="aplicacion__menu-lateral-navegacion-item" href="">Gestión de clientes</a>
        <button onClick={cerrarSesion} type='button' className="aplicacion__menu-lateral-navegacion-item">Cerrar sesión</button>
      </nav>
    </aside>
  )
}

export default MenuLateral