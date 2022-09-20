import env from "../../config/env";
import fetch from "../../utils/api";

const router = {
  sendMail: `${env.apiUrl}/api/v1/otp/send-mail`,
  sendOtp: `${env.apiUrl}/api/v1/otp/verify`,
};

class MailService {
  static SendMail(params: object) {
    let uri = router.sendMail;
    return fetch.get(uri, params);
  }
  static SendOtp(params: object) {
    let uri = router.sendOtp;
    return fetch.post(uri, params);
  }
}

export default MailService;
