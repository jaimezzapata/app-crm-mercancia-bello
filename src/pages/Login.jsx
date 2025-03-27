import './Login.css'
import { useState } from 'react'
import { usuarios } from '../services/database'

function Login() {
  const [getName, setName] = useState("")
  const [getPassword, setPassword] = useState("")

  function iniciarSesion() {
    if (getName === "admin" && getPassword === "admin") {
      alert("Bienvenido")
    } else {
      alert("Usuario o contraseña incorrectos")
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