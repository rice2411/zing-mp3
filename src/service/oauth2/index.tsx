import env from "../../config/env";
import fetch from "../../utils/api";

const router = {
  login: `${env.apiUrl}/api/v1/oauth2/login`,
  google: `${env.apiUrl}/api/v1/oauth2/google`,
  facebook: `${env.apiUrl}/api/v1/oauth2/facebook`,
  github: `${env.apiUrl}/api/v1/oauth2/github`,
};

class OAuth2Service {
  static login(params: object) {
    let uri = router.login;
    return fetch.post(uri, params);
  }
  static google() {
    return router.google;
  }
  static facebook() {
    return router.facebook;
  }
  static github() {
    return router.github;
  }
}

export default OAuth2Service;
