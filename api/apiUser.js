const { instance } = require("@/config/instanceAxios");
import { BASE_URL_ADDRESS } from "@/constant/baseURL";

const BASE_URL = BASE_URL_ADDRESS + "/users";
//
const getUsers = async () => {
  const { data } = await instance.get(BASE_URL);
  return data;
};

const postUser = async (params) => {
  const { data } = await instance.post(BASE_URL, params);
  return data;
};

const getUser = async ({ queryKey }) => {
  const params = queryKey[1];
  const { data } = await instance.get(`${BASE_URL}/${params}`);
  return data;
};

export { getUsers, postUser, getUser };
