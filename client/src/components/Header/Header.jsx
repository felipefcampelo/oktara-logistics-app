import { NavLink, Link, useLocation } from 'react-router-dom'
import './header.css'

const Header = () => {
  const location = useLocation();

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <span href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark">
          <img src="/oktara-logo.svg" style={{ 'width': '150px' }} />
          <span className="fs-5 ms-2 mt-3">Logistics App</span>
        </span>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/inventory" className="nav-link" activeclassname="active">Inventory</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/shipments" className="nav-link" activeclassname="active">Shipments</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/warehouse" className="nav-link" activeclassname="active">Warehouse</NavLink>
          </li>
          <li className="nav-item">
            <a href="https://github.com/felipefcampelo/oktara-logistics-app"
              target="_blank" className="nav-link">Documentation</a>
          </li>
          <li className="nav-item">
            <NavLink to="/" className="btn btn-outline-secondary">Logout</NavLink>
          </li>
        </ul>
      </header>
    </div>
  )
}

export { Header }