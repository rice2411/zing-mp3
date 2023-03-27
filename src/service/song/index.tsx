import env from "../../config/env";
import fetch from "../../utils/api";

const router = {
  getListSong: `${env.apiUrl}/api/v1/song`,
  getNewRelease: `${env.apiUrl}/api/v1/song/get-new-release`,
};

class SongService {
  static getListSong(params: object) {
    let uri = router.getListSong;
    return fetch.get(uri, params);
  }
  static getNewRelease() {
    let uri = router.getNewRelease;
    return fetch.get(uri);
  }
}

export default SongService;
