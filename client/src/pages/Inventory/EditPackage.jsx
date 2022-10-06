import { Link } from 'react-router-dom'
import { Header } from '../../components/Header/Header'

const EditPackage = () => {
  return (
    <div className="section-inventory">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="h4">Inventory | Edit package</h1>
          </div>
          <div className="col-6 text-end">
            <Link to="/inventory" className="btn btn-sm btn-outline-secondary">
              Go back
            </Link>
          </div>
        </div>

        <div className="inventory-form-create col-3 m-auto mt-4">
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input type="text" id="package-name" className="form-control"
              placeholder="Set the package name" />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="">Warehouse position</label>
            <input type="number" min="1" id="package-warehouse-position" 
              className="form-control" placeholder="1" />
          </div>
          <div className="form-group mt-3 text-center d-grid">
            <button type="button" id="package-create-button" 
              className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { EditPackage }