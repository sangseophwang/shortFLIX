import axios from "axios";

const AzureAxios = axios.create({
  baseURL: "Azure API address",
});

export default AzureAxios;
