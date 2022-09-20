import env from "../../config/env";
import fetch from "../../utils/api";

const router = {
  login: `${env.apiUrl}/api/v1/auth/login`,
  register: `${env.apiUrl}/api/v1/auth/register`,
  verify: `${env.apiUrl}/api/v1/auth/verify`,
  resetPassword: `${env.apiUrl}/api/v1/auth/reset-password`,
};

class AuthService {
  static login(params: object) {
    let uri = router.login;
    return fetch.post(uri, params);
  }
  static register(params: object) {
    let uri = router.register;
    return fetch.post(uri, params);
  }
  static verify() {
    let uri = router.verify;
    return fetch.get(uri);
  }
  static resetPassword(params: object) {
    let uri = router.resetPassword;
    return fetch.post(uri, params);
  }
}

export default AuthService;
