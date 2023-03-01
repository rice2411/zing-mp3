import env from "../config/env";
export function getFile(name: string) {
  return env.staticFileUrl + "/api/v1/file/" + name;
}
