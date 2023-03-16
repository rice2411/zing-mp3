import cookie from "js-cookie";

function Login(token: string) {
  cookie.set("token", token);
  return true;
}

function logout() {
  cookie.remove("token");
  cookie.remove("profile");
  cookie.remove("userId");
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
      logout();
    }
  }
}

function getCurrentUser() {
  const user: string = cookie.get("user")!;
  if (typeof JSON.parse(user) !== "undefined") {
    if (JSON.parse(user)) {
      return JSON.parse(user);
    } else {
      logout();
    }
  }
}

export { Login, logout, getCurrentUser, getCurrentToken };
