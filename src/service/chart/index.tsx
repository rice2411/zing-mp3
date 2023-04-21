import env from "../../config/env";
import fetch, { fmt } from "../../utils/api";

const router = {
  get: `${env.apiUrl}/api/v1/chart/get`,
};

class ChartService {
  static get(param: object) {
    let uri = router.get;
    return fetch.get(uri, param);
  }
}

export default ChartService;
