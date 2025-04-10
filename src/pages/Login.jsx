import './Login.css'
import { useState } from 'react'
import { alertaError, alertaRedireccion, generarToken } from '../helpers/funciones'
import { usuarios } from '../services/database'
import { useNavigate } from "react-router-dom";


function Login() {
  const [getName, setName] = useState("")
  const [getPassword, setPassword] = useState("")
  let redireccion = useNavigate()

  function buscarUsuario() {
    let auth = usuarios.find((item) => item.usuario === getName && item.contrasena == getPassword)
    localStorage.setItem("usuario", auth.nombre)
    console.log(auth);
    return auth
  }

  function iniciarSesion() {
    if (buscarUsuario()) {
      localStorage.setItem("token", generarToken())
      alertaRedireccion(redireccion, "/home", "Bienvenido a la aplicacion")
    } else {
      alertaError("Error de credenciales")
    }
  }

  return (
    <form /* onSubmit={iniciarSesion} */ className="form">
      Sign Up
      <input onChange={(e) => setName(e.target.value)} type="text" className="input" placeholder="Name" />
      <input onChange={(e) => setPassword(e.target.value)} type="text" className="input" placeholder="Password" />
      <button type='button' onClick={iniciarSesion}>Submit</button>
    </form>
  )
}
export default Login