import env from "../../config/env";
import fetch from "../../utils/api";

const router = {
  getListSong: `${env.apiUrl}/api/v1/song`,
};

class SongService {
  static getListSong(params: object) {
    let uri = router.getListSong;
    return fetch.get(uri, params);
  }
}

export default SongService;
