import env from "../../config/env";
import fetch, { fmt } from "../../utils/api";

const router = {
  get: `${env.apiUrl}/api/v1/chart/get`,
};

class ChartService {
  static get() {
    let uri = router.get;
    return fetch.get(uri);
  }
}

export default ChartService;
