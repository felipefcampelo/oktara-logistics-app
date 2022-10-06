import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { PackageInPosition } from '../../components/Warehouse/PackageInPosition'
import WarehouseService from '../../services/warehouseService'

const Warehouse = () => {
  const [warehousePositionList, setWarehousePositionList] = React.useState('')

  React.useEffect(() => {
    retrieveWarehousePositions()
  }, [])

  const retrieveWarehousePositions = () => {
    WarehouseService.getAll()
      .then((response) => {
        setWarehousePositionList(response)
      })
      .catch((e) => {
        console.log(e);
      })
  }

  const refreshList = () => {
    retrieveWarehousePositions()
  }

  if (!warehousePositionList) return "No packages"

  return (
    <div className="section-shipments">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="h4">Warehouse</h1>
            <h6>Total Storage Locations: {warehousePositionList.data.length}</h6>
          </div>
        </div>

        <div className="card mt-4">
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Warehouse Location ID</th>
                  <th>Package</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  warehousePositionList.data.length ? warehousePositionList.data.map((warehousePosition, i) => {
                    return (
                      <tr key={i}>
                        <td>{warehousePosition.position_code}</td>
                        <td>
                          {
                          (warehousePosition.warehouse_position_status === 'Busy') ?
                            <PackageInPosition 
                              positionId={warehousePosition.warehouse_position_id} /> : 
                              "-"
                          }
                        </td>
                        <td className={
                          (warehousePosition.warehouse_position_status === 'Free') ?
                            'table-success' :
                            'table-danger'
                        }>
                          {warehousePosition.warehouse_position_status}
                        </td>
                      </tr>
                    )
                  }) : ""
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Warehouse }