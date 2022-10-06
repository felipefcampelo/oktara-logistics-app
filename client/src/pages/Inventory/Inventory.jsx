import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import InventoryService from '../../services/inventoryService'

const Inventory = () => {
  const [packageList, setPackageList] = useState('')

  const retrievePackages = () => {
    InventoryService.getAll()
      .then((response) => {
        setPackageList(response)
      })
      .catch((e) => {
        console.log(e);
      })
  }

  useEffect(() => {
    retrievePackages()
  }, [])

  const refreshList = () => {
    retrievePackages()
  }

  if (!packageList) return "No packages"

  return (
    <div className="section-inventory">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="h4">Inventory (Package List)</h1>
          </div>
          <div className="col-6 text-end">
            <Link to="/inventory/create" className="btn btn-primary">
              Create new package
            </Link>
          </div>
        </div>

        <div className="card mt-4">
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Warehouse position</th>
                  <th>Shipment ID</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  packageList.data.length ? packageList.data.map((packageItem, i) => {
                    return (
                      <tr key={i}>
                        <td>{packageItem.name}</td>
                        <td>{(packageItem.warehouse_position != null) ? packageItem.warehouse_position : 'Not stored'}</td>
                        <td>{(packageItem.shipment != null) ? packageItem.shipment : 'Not allocated'}</td>
                        <td>{packageItem.package_status}</td>
                        <td>
                          <Link to="/inventory/edit/{id}"
                            className="btn btn-sm btn-outline-dark me-1">
                            Edit
                          </Link>

                          {
                            (packageItem.package_status == 'Stored') ?
                              <button type="button"
                                className="btn btn-sm btn-outline-danger">
                                Delete package
                              </button> :
                              (packageItem.package_status == 'Pending') ?
                                <button type="button"
                                  className="btn btn-sm btn-outline-danger">
                                  Remove from shipment
                                </button> :
                                (packageItem.package_status == 'Delivered') ?
                                  <Link to="/shipments/view/{id}"
                                    className="btn btn-sm btn-link">
                                    View shipment (SHIP-1234)
                                  </Link> : ""
                          }
                        </td>
                      </tr>
                    )
                  }) : "No packages registered"
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Inventory }