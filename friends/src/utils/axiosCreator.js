import axios from "axios";

export function getToken() {
  return window.localStorage.getItem("token");
}

export default function() {
  return axios.create({
    baseURL: "http://localhost5000",
    headers: {
      Authorization: getToken()
    }
  });
}
