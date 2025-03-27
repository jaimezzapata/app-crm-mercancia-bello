import './Login.css'
function Login() {
  return (
    <form className="form">
      Sign Up
      <input type="text" className="input" placeholder="Name" />
      <input type="text" className="input" placeholder="Password" />
      <button>Submit</button>
    </form>
  )
}
export default Login