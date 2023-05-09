import env from "../../config/env";
import fetch, { fmt } from "../../utils/api";

const router = {
  recentAlbum: `${env.apiUrl}/api/v1/album/get-recent`,
  suggestAlbum: `${env.apiUrl}/api/v1/album/get-suggest`,
  dailyTopic: `${env.apiUrl}/api/v1/album/get-daily-topic`,
  top100: `${env.apiUrl}/api/v1/album/get-top100`,
  suggestType: `${env.apiUrl}/api/v1/album/get-suggest-type`,
  detailAlbum: `${env.apiUrl}/api/v1/album/{albumId}`,
  getNeighbour: `${env.apiUrl}/api/v1/album/get-neighbour/{typeId}`,
  getAll: `${env.apiUrl}/api/v1/album/get-all`,
  create: `${env.apiUrl}/api/v1/album/`,
  update: `${env.apiUrl}/api/v1/album/`,
  delete: `${env.apiUrl}/api/v1/album/{albumId}`,
};

class AlbumService {
  static update(param: object) {
    let uri = router.update;
    return fetch.put(uri, param);
  }
  static delete(albumId: string) {
    let uri = fmt(router.delete, { albumId });
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
  static getNeighBour(typeId: string) {
    let uri = fmt(router.getNeighbour, { typeId });
    return fetch.get(uri);
  }
  static detailAlbum(albumId: string) {
    let uri = fmt(router.detailAlbum, { albumId });
    return fetch.get(uri);
  }
  static recentAlbum() {
    let uri = router.recentAlbum;
    return fetch.get(uri);
  }
  static suggestAlbum() {
    let uri = router.suggestAlbum;
    return fetch.get(uri);
  }
  static dailyTopic() {
    let uri = router.dailyTopic;
    return fetch.get(uri);
  }
  static top100() {
    let uri = router.top100;
    return fetch.get(uri);
  }
  static suggestType(param: object) {
    let uri = router.suggestType;
    return fetch.get(uri, param);
  }
}

export default AlbumService;
