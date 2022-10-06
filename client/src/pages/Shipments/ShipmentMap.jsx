import { Link } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import './shipments.css'

const ShipmentMap = () => {
  return (
    <div className="section-shipments">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="h4">Shipment | Shipment Map</h1>
          </div>
          <div className="col-6 text-end">
            <Link to="/shipments" className="btn btn-sm btn-outline-secondary">
              Go back
            </Link>
          </div>
        </div>

        <div className="shipment-map-container col-12 m-auto mt-4">
          
        </div>
      </div>
    </div>
  )
}

export { ShipmentMap }