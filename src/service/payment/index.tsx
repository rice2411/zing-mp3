import env from "../../config/env";
import fetch from "../../utils/api";

const router = {
  ZaloPayPayment: `${env.apiUrl}/api/v1/payment/zalo-pay/payment`,
  ZaloPayCheckStatusTransaction: `${env.apiUrl}/api/v1/payment/zalo-pay/check`,
  MoMoPayment: `${env.apiUrl}/api/v1/payment/momo/payment`,
  MoMoCheckStatusTransaction: `${env.apiUrl}/api/v1/payment/momo/check`,
};

class PaymentService {
  static ZaloPayPayment() {
    let uri = router.ZaloPayPayment;
    return fetch.get(uri);
  }
  static ZaloPayCheckStatusTransaction(param: object) {
    let uri = router.ZaloPayCheckStatusTransaction;
    return fetch.get(uri, param);
  }
  static MoMoPayPayment() {
    let uri = router.MoMoPayment;
    return fetch.get(uri);
  }
  static MoMoPayCheckStatusTransaction(param: object) {
    let uri = router.MoMoCheckStatusTransaction;
    return fetch.get(uri, param);
  }
}

export default PaymentService;
