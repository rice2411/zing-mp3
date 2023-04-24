import env from "../../config/env";
import fetch from "../../utils/api";

const router = {
  zaloPay: `${env.apiUrl}/api/v1/payment/zalo-pay`,
  check: `${env.apiUrl}/api/v1/payment/check`,
};

class PaymentService {
  static zaloPay() {
    let uri = router.zaloPay;
    return fetch.get(uri);
  }
  static check(param: object) {
    let uri = router.check;
    return fetch.get(uri, param);
  }
}

export default PaymentService;
