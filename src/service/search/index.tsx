import env from "../../config/env";
import fetch, { fmt } from "../../utils/api";

const router = {
  searchSuggest: `${env.apiUrl}/api/v1/search/search-suggest`,
  searchFull: `${env.apiUrl}/api/v1/search/search-full`,
};

class SearchService {
  static searchSuggest(params: object) {
    let uri = router.searchSuggest;
    return fetch.get(uri, params);
  }
  static searchFull(params: object) {
    let uri = router.searchFull;
    return fetch.get(uri, params);
  }
}

export default SearchService;
