import { Link } from 'react-router-dom'
import "./login.css"

const Login = () => {
  return (
    <div className="section-login">
      <main className="m-auto text-center">
        <div className="access-container">
          <img className="mb-4" src="/oktara-logo.svg" />
          <h1 className="mb-3 fw-normal">Logistics App</h1>

          <Link to="/inventory" className="w-100 btn btn-lg btn-primary">Enter</Link>
          <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
        </div>
      </main>
    </div>
  )
}

export { Login }