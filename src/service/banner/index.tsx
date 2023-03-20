import env from "../../config/env";
import fetch from "../../utils/api";

const router = {
  getAll: `${env.apiUrl}/api/v1/banner/get-all`,
};

class BannerService {
  static getAll(params?: object) {
    let uri = router.getAll;
    return fetch.get(uri, params);
  }
}

export default BannerService;
