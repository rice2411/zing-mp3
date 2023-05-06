import env from "../../config/env";
import fetch from "../../utils/api";

const router = {
  getAll: `${env.apiUrl}/api/v1/transaction/get-all`,
};

class TransactionService {
  static getAll() {
    let uri = router.getAll;
    return fetch.get(uri);
  }
}

export default TransactionService;
