import env from "../../config/env";
import fetch from "../../utils/api";

const router = {
  getAll: `${env.apiUrl}/api/v1/transaction/get-all`,
  statistic: `${env.apiUrl}/api/v1/transaction/statistic`,
};

class TransactionService {
  static getAll(param: object) {
    let uri = router.getAll;
    return fetch.get(uri, param);
  }
  static statistic() {
    let uri = router.statistic;
    return fetch.get(uri);
  }
}

export default TransactionService;
