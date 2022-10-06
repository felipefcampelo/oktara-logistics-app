import { Link } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import './shipments.css'

const ViewShipment = () => {
  return (
    <div className="section-shipments">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="h4">Shipment | View shipment</h1>
          </div>
          <div className="col-6 text-end">
            <Link to="/shipments" className="btn btn-sm btn-outline-secondary">
              Go back
            </Link>
          </div>
        </div>

        <div className="shipment-form-create col-4 m-auto mt-4">
          <div className="form-group">
            <label htmlFor="">Shipment ID</label>
            <input type="text" id="shipment-code" className="form-control"
              value="SHIP-1234" disabled />
          </div>
          <div className="form-group mt-5">
            <p>Packages in the shipment</p>

            <div className="card">
              <div className="card-body package-list">
                <p>Package 1</p>
                <p>Package 2</p>
                <p>Package 3</p>
                <p>Package 4</p>
                <p>Package 5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ViewShipment }