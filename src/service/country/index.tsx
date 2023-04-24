import env from "../../config/env";
import fetch from "../../utils/api";

const router = {
  get4Options: `${env.apiUrl}/api/v1/country/get-4-options`,
};

class CountryService {
  static get4Options() {
    let uri = router.get4Options;
    return fetch.get(uri);
  }
}

export default CountryService;
