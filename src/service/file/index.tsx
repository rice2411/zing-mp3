import env from "../../config/env";
import fetch from "../../utils/api";

const router = {
  upload: `${env.apiUrl}/api/v1/file`,
};

class FileService {
  static upload(params: object) {
    let uri = router.upload;
    return fetch.post(uri, params);
  }
}

export default FileService;
