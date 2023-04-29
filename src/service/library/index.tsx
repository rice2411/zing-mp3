import env from "../../config/env";
import fetch, { fmt } from "../../utils/api";

const router = {
  recentAlbum: `${env.apiUrl}/api/v1/library/get-recent-album`,
  addAlbumHistory: `${env.apiUrl}/api/v1/library/add-album-history/{albumId}`,
  likeSong: `${env.apiUrl}/api/v1/library/like-song/{songId}`,
  likeAlbum: `${env.apiUrl}/api/v1/library/like-album/{albumId}`,
  likeArtist: `${env.apiUrl}/api/v1/library/like-artist/{artistId}`,
  get: `${env.apiUrl}/api/v1/library/get`,
  playNewPlaylist: `${env.apiUrl}/api/v1/library/play-new-playlist`,
  getPlaylist: `${env.apiUrl}/api/v1/library/get-playlist`,
  createPLaylist: `${env.apiUrl}/api/v1/library/create-playlist`,
  addToPlayingList: `${env.apiUrl}/api/v1/library/add-to-playing-list/{songId}`,
};
class LibraryService {
  static addToPlayingList(songId: string) {
    let uri = fmt(router.addToPlayingList, { songId });
    return fetch.post(uri);
  }
  static createPLaylist(param: object) {
    let uri = router.createPLaylist;
    return fetch.post(uri, param);
  }
  static getPlaylist() {
    let uri = router.getPlaylist;
    return fetch.get(uri);
  }
  static playNewPlaylist(param: object) {
    let uri = router.playNewPlaylist;
    return fetch.get(uri, param);
  }
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
