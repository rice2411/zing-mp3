import Axios from "../shared/axios/axios";
import axios from "axios";
import cookie from "js-cookie";
export function convertToQueryString(params?: any) {
  if (typeof params == "string") return params;
  let paramString = "";
  Object.keys(params).map((key) => {
    if (params[key] !== "") {
      paramString += key + "=" + params[key] + "&";
    }
  });
  paramString = paramString.slice(0, -1);
  return paramString;
}
let fetch = {};
export default fetch = {
  /**
   *
   */
  async get(url: string, params?: any, token?: any) {
    return new Promise(async (res, rej) => {
      let queryString = "";
      let response: any;
      if (params) {
        queryString = convertToQueryString(params);
      }

      if (params) {
        url = url + "?" + queryString;
      } else {
        url = url;
      }

      try {
        if (token) {
          response = await axios({
            method: "get",
            url: url,
            data: {},
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } else {
          response = Axios.get(url);
        }

        return res(response);
      } catch (error) {
        console.log(error);
      }
    });
  },

  /**
   *
   */
  async get1(url: string, token?: any) {
    return new Promise(async (res, rej) => {
      let response: any;

      try {
        if (token) {
          response = await axios({
            method: "get",
            url: url,
            data: {},
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } else {
          response = Axios.get(url);
        }

        return res(response);
      } catch (error) {
        console.log(error);
      }
    });
  },

  /**
   *
   */
  async put(url: string, params?: any) {
    return new Promise((res, rej) => {
      try {
        let response = Axios.put(url, params);
        return res(response);
      } catch (error) {
        rej(error);
      }
    });
  },

  /**
   *
   */
  async put1(url: string, params?: any) {
    return new Promise((res, rej) => {
      let queryString = "";
      if (params) {
        queryString = convertToQueryString(params);
      }

      if (params) {
        url = url + "?" + queryString;
      } else {
        url = url;
      }
      try {
        let response = Axios.put(url, params);
        return res(response);
      } catch (error) {
        rej(error);
      }
    });
  },

  /**
   *
   */
  async patch(url: string, params?: any) {
    return new Promise((res, rej) => {
      try {
        let response = Axios.patch(url, params);
        return res(response);
      } catch (error) {
        rej(error);
      }
    });
  },
  /**
   *
   */
  async post(url: string, params?: any) {
    return new Promise((res, rej) => {
      try {
        let response = Axios.post(url, params);
        return res(response);
      } catch (error) {
        rej(error);
      }
    });
  },

  async postFile(url: string, formData?: any) {
    const token = cookie.get("token") || null;
    return new Promise((res, rej) => {
      try {
        let response = axios.post(url, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return res(response);
      } catch (error) {
        rej(error);
      }
    });
  },

  /**
   *
   */
  async delete(url: string, params?: any) {
    return new Promise(async (res, rej) => {
      try {
        let response = Axios.delete(url, { data: params });

        return res(response);
      } catch (error) {
        rej(error);
      }
    });
  },
};
export function fmt<TObject>(text: string, myHash: any) {
  let key;
  // tslint:disable-next-line: forin
  for (key in myHash) {
    text = text.replace(new RegExp("\\{" + key + "\\}", "gm"), myHash[key]);
  }
  return text;
}
