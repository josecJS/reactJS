import _axios from "axios";

const axios = _axios.create({
  baseURL: "https://fakestoreapi.com/",
  responseType: "json"
});

const GET = async (url) => {
  return axios.get(url)
    .then(response => response.data);
}

const POST = (url, data) => {
  return axios.post(url, data)
    .then(response => response.data);
}

export { GET, POST };