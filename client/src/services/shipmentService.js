import http from './httpInitialize'

class ShipmentService {
  getAll() {
    return http.get(`/shipment`)
  }

  get(id) {
    return http.get(`shipment/${id}`)
  }

  create(data) {
    return http.post(`/shipment`, data);
  }

  update(id, data) {
    return http.put(`/shipment/${id}`, data);
  }

  delete(id) {
    return http.delete(`/shipment/${id}`);
  }

  getShipmentStatusList() {
    return http.get(`/shipment_status`)
  }

  getPackagesInShipment(id) {
    return http.get(`/shipment_packages/?pk=${id}`)
  }
}

export default new ShipmentService()