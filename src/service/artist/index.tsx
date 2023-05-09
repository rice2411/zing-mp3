import env from "../../config/env";
import fetch, { fmt } from "../../utils/api";

const router = {
  appearIn: `${env.apiUrl}/api/v1/artist/appear-in/{artistId}`,
  get: `${env.apiUrl}/api/v1/artist/get/{artistId}`,
  getAll: `${env.apiUrl}/api/v1/artist/get-all`,
  create: `${env.apiUrl}/api/v1/artist/`,
  update: `${env.apiUrl}/api/v1/artist/`,
  delete: `${env.apiUrl}/api/v1/artist/{artistId}`,
};

class ArtistService {
  static update(param: object) {
    let uri = router.update;
    return fetch.put(uri, param);
  }
  static delete(artistId: string) {
    let uri = fmt(router.delete, { artistId });
    return fetch.delete(uri);
  }
  static create(param: object) {
    let uri = router.create;
    return fetch.post(uri, param);
  }
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
