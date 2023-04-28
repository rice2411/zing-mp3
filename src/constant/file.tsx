import env from "../config/env";
export function getFile(name: string) {
  const result = name
    ? env.staticFileUrl + "/api/v1/file/" + name
    : env.staticFileUrl + "/api/v1/file/" + "avatar_default.png";

  try {
    return result;
  } catch (err) {
    console.log(err);
  }
}
