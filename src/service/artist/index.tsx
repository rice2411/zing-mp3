import env from "../../config/env";
import fetch, { fmt } from "../../utils/api";

const router = {
  appearIn: `${env.apiUrl}/api/v1/artist/appear-in/{artistId}`,
  get: `${env.apiUrl}/api/v1/artist/get/{artistId}`,
  getAll: `${env.apiUrl}/api/v1/artist/get-all`,
};

class ArtistService {
  static getAll(param: object) {
    let uri = router.getAll;
    return fetch.get(uri, param);
  }
  static appearIn(artistId: string) {
    let uri = fmt(router.appearIn, { artistId });
    return fetch.get(uri);
  }
  static get(artistId: string) {
    let uri = fmt(router.get, { artistId });
    return fetch.get(uri);
  }
}

export default ArtistService;
