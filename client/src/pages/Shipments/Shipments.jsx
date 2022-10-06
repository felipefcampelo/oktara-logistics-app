import { Link } from 'react-router-dom'
import { Header } from '../../components/Header/Header'

const Shipments = () => {
  return (
    <div className="section-shipments">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="h4">Shipments</h1>
          </div>
          <div className="col-6 text-end">
            <Link to="/shipments/create" className="btn btn-primary">
              Create new shipment
            </Link>
          </div>
        </div>

        <div className="card mt-4">
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Shipment Code</th>
                  <th>Allocated Packages</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* When the shipment is waiting to start */}
                <tr>
                  <td>SHIP-1234</td>
                  <td>7/10</td>
                  <td>Pending</td>
                  <td>
                    <Link to="/shipments/edit/{id}" className="btn btn-sm btn-outline-dark me-1">
                      Edit
                    </Link>
                    <button type="button" className="btn btn-sm btn-outline-danger me-1"
                        onClick="{deleteShipment({shipment.id})}">
                      Delete
                    </button>
                    <Link to="/shipments/map/{id}" className="btn btn-sm btn-warning me-1">
                      Shipment Map
                    </Link>
                    <button type="button" className="btn btn-sm btn-success"
                        onClick="{executeShipment(shipment.id)}">
                      Execute
                    </button>
                  </td>
                </tr>
                
                {/* When the shipment is done */}
                <tr>
                  <td>SHIP-3456</td>
                  <td>10/10</td>
                  <td>Done</td>
                  <td>
                    <Link to="/shipments/view/{id}" className="btn btn-sm btn-outline-dark me-1">
                      View
                    </Link>
                    <Link to="/shipments/map/{id}" className="btn btn-sm btn-warning me-1">
                      Shipment Map
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Shipments }