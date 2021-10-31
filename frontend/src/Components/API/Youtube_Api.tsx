import axios from "axios";

const KEY = "This is a secret API key";

export default axios.create({
  baseURL: "API address",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
