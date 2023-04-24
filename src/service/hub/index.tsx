import env from "../../config/env";
import fetch, { fmt } from "../../utils/api";

const router = {
  getAll: `${env.apiUrl}/api/v1/hub/get-all`,
  get: `${env.apiUrl}/api/v1/hub/get/{hubId}`,
};

class HubService {
  static getAll() {
    let uri = router.getAll;
    return fetch.get(uri);
  }
  static get(hubId: string) {
    let uri = fmt(router.get, { hubId });
    return fetch.get(uri);
  }
}

export default HubService;
