import env from "../config/env";
export function getFile(name: string = "default.jpg") {
  try {
    return env.staticFileUrl + "/api/v1/file/" + name;
  } catch (err) {
    console.log(err);
  }
}
