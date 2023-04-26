import env from "../../config/env";
import fetch, { fmt } from "../../utils/api";

const router = {
  getListSong: `${env.apiUrl}/api/v1/song`,
  getNewRelease: `${env.apiUrl}/api/v1/song/get-new-release`,
  increaseViews: `${env.apiUrl}/api/v1/song/increase-views/{songId}`,
  getLyrics: `${env.apiUrl}/api/v1/song/get-lyrics/{songId}`,
};

class SongService {
  static getLyrics(songId: string) {
    let uri = fmt(router.getLyrics, { songId });
    return fetch.get(uri);
  }
  static increaseViews(songId: string) {
    let uri = fmt(router.increaseViews, { songId });
    return fetch.get(uri);
  }
  static getListSong(params: object) {
    let uri = router.getListSong;
    return fetch.get(uri, params);
  }
  static getNewRelease(params?: object) {
    let uri = router.getNewRelease;
    return fetch.get(uri, params);
  }
}

export default SongService;
