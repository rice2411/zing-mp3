import env from "../../config/env";
import fetch from "../../utils/api";

const router = {
  recentPlaylist: `${env.apiUrl}/api/v1/song/recent`,
};

class PlaylistService {
  static recentPlaylist(params?: object) {
    let uri = router.recentPlaylist;
    return fetch.get(uri, params);
  }
}

export default PlaylistService;
