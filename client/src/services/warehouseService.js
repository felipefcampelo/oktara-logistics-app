import http from './httpInitialize'

class WarehouseService {
  getAll() {
    return http.get(`/warehouse_position`)
  }

  get(id) {
    return http.get(`warehouse_position/${id}`)
  }

  create(data) {
    return http.post(`/warehouse_position`, data);
  }

  update(id, data) {
    return http.put(`/warehouse_position/${id}`, data);
  }

  delete(id) {
    return http.delete(`/warehouse_position/${id}`);
  }

  getWarehousePositionStatusList() {
    return http.get(`warehouse_position_status`)
  }

  getPackageInPosition(id) {
    return http.get(`warehouse_position_packages/?pk=${id}`)
  }
}

export default new WarehouseService()