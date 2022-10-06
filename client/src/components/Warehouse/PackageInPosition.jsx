import { useState, useEffect } from 'react'
import WarehouseService from '../../services/warehouseService'

const PackageInPosition = (props) => {
  const [packageInPositionItem, setPackageInPositionItem] = useState('')

  useEffect(() => {
    retrievePackageInPosition()
  }, [])

  const retrievePackageInPosition = () => {
    WarehouseService.getPackageInPosition(props.positionId)
      .then((response) => {
        setPackageInPositionItem(response.data[0].name)
      })
      .catch((e) => {
        console.log(e);
      })
  }

  return (
    <>{packageInPositionItem}</>
  )
}

export { PackageInPosition }