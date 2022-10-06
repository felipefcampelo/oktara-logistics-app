import http from './httpInitialize'

class InventoryService {
  getAll() {
    return http.get(`/package/`)
  }

  get(id) {
    return http.get(`package/${id}`)
  }

  create(data) {
    return http.post(`/package/`, data);
  }

  update(id, data) {
    return http.put(`/package/${id}`, data);
  }

  delete(id) {
    return http.delete(`/package/${id}`);
  }

  getPackageStatusList() {
    return http.get(`/package_status/`)
  }
}

export default new InventoryService()