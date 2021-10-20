import axios from "axios";

const AzureAxios = axios.create({
  baseURL: "http://kdt-vm-0202003.koreacentral.cloudapp.azure.com:5000",
});

export default AzureAxios;
