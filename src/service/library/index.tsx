import env from "../../config/env";
import fetch, { fmt } from "../../utils/api";

const router = {
  recentAlbum: `${env.apiUrl}/api/v1/library/get-recent-album`,
  addAlbumHistory: `${env.apiUrl}/api/v1/library/add-album-history/{albumId}`,
  likeSong: `${env.apiUrl}/api/v1/library/like-song/{songId}`,
  likeAlbum: `${env.apiUrl}/api/v1/library/like-album/{albumId}`,
  likeArtist: `${env.apiUrl}/api/v1/library/like-artist/{artistId}`,
  get: `${env.apiUrl}/api/v1/library/get`,
};
class LibraryService {
  static get() {
    let uri = router.get;
    return fetch.get(uri);
  }
  static recentAlbum() {
    let uri = router.recentAlbum;
    return fetch.get(uri);
  }
  static likeArtist(artistId: string) {
    let uri = fmt(router.likeArtist, { artistId });
    return fetch.get(uri);
  }
  static likeAlbum(albumId: string) {
    let uri = fmt(router.likeAlbum, { albumId });
    return fetch.get(uri);
  }
  static likeSong(songId: string) {
    let uri = fmt(router.likeSong, { songId });
    return fetch.get(uri);
  }
  static addAlbumHistory(albumId: string) {
    let uri = fmt(router.addAlbumHistory, { albumId });
    return fetch.get(uri);
  }
}

export default LibraryService;
