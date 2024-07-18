import axios from "axios";

const httpRequestSearch = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const httpRequestAccount = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const get = async (path, options = {}) => {
  const respone = await httpRequestSearch.get(path, options);
  return respone.data;
};
