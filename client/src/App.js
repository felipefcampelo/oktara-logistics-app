import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {
  Login,
  Inventory, CreatePackage, EditPackage,
  Shipments, CreateShipment, EditShipment, ViewShipment, ShipmentMap,
  Warehouse
} from './pages'

function App() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path='/' element={<Login />} />

        {/* Inventory */}
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/inventory/create' element={<CreatePackage />} />
        <Route path='/inventory/edit/{id}' element={<EditPackage />} />

        {/* Shipments */}
        <Route path='/shipments' element={<Shipments />} />
        <Route path='/shipments/create' element={<CreateShipment />} />
        <Route path='/shipments/edit/{id}' element={<EditShipment />} />
        <Route path='/shipments/view/{id}' element={<ViewShipment />} />
        <Route path='/shipments/map/{id}' element={<ShipmentMap />} />

        {/* Warehouse */}
        <Route path='/warehouse' element={<Warehouse />} />

        {/* Not Found Page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
