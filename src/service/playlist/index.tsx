import env from "../../config/env";
import fetch from "../../utils/api";

const router = {
  recentPlaylist: `${env.apiUrl}/api/v1/playlist/get-recent`,
};

class PlaylistService {
  static recentPlaylist() {
    let uri = router.recentPlaylist;
    return fetch.get(uri);
  }
}

export default PlaylistService;
