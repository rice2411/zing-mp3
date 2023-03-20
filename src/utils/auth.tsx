import cookie from "js-cookie";

function setToken(token: string) {
  cookie.set("token", token, { expires: 365 });

  return true;
}
function setUser(user: string) {
  cookie.set("user", user, { expires: 365 });

  return true;
}

function Logout() {
  cookie.remove("token");
  cookie.remove("user");
  if (typeof window != "undefined") {
    window.localStorage.setItem("logout", Date.now().toString());
  }
}

function getCurrentToken() {
  const token: string = cookie.get("token")!;
  if (typeof JSON.parse(token) !== "undefined") {
    if (JSON.parse(token)) {
      return JSON.parse(token);
    } else {
      Logout();
    }
  }
}

function getCurrentUser() {
  const user: string = cookie.get("user")!;
  if (typeof JSON.parse(user) !== "undefined") {
    if (JSON.parse(user)) {
      return JSON.parse(user);
    } else {
      Logout();
    }
  }
}

export { setToken, setUser, Logout, getCurrentUser, getCurrentToken };
