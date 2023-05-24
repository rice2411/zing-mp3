import env from "../config/env";
export function getFile(name: string) {
  const type = name?.includes("mp3")
    ? "/video/upload/audios/"
    : "/image/upload/images/";
  const result = name
    ? env.staticFileUrl + type + name
    : env.staticFileUrl + type + "avatar_default.png";

  try {
    return result;
  } catch (err) {
    console.log(err);
  }
}
