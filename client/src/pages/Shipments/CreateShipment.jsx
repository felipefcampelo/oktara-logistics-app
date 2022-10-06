import { Link } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import './shipments.css'

const CreateShipment = () => {
  return (
    <div className="section-shipments">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="h4">Shipment | Create new shipment</h1>
          </div>
          <div className="col-6 text-end">
            <Link to="/shipments" className="btn btn-sm btn-outline-secondary">
              Go back
            </Link>
          </div>
        </div>

        <div className="shipment-form-create col-4 m-auto mt-4">
          <div className="form-group">
            <label htmlFor="">Shipment Code</label>
            <input type="text" id="shipment-code" className="form-control"
              placeholder="SHIP-1234" />
          </div>
          <div className="form-group mt-5">
            <p>Select the packages you want to add to this shipment</p>

            <div className="card">
              <div className="card-body package-list">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="package-1" />
                  <label className="form-check-label" for="package-1">
                    Package 1
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="package-2" />
                  <label className="form-check-label" for="package-2">
                    Package 2
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="package-3" />
                  <label className="form-check-label" for="package-3">
                    Package 3
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="package-4" />
                  <label className="form-check-label" for="package-4">
                    Package 4
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group mt-3 text-center d-grid">
            <button type="button" id="package-create-button"
              className="btn btn-primary">Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CreateShipment }