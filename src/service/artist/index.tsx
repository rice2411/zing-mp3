import env from "../../config/env";
import fetch, { fmt } from "../../utils/api";

const router = {
  appearIn: `${env.apiUrl}/api/v1/artist/appear-in/{artistId}`,
};

class ArtistService {
  static appearIn(artistId: string) {
    let uri = fmt(router.appearIn, { artistId });
    return fetch.get(uri);
  }
}

export default ArtistService;
