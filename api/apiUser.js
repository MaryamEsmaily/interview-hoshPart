const { instance } = require("@/config/instanceAxios");
import { BASE_URL_ADDRESS } from "@/constant/baseURL";

const BASE_URL = BASE_URL_ADDRESS + "/users";
//
const getUsers = async () => {
  const { data } = await instance.get(BASE_URL);
  return data;
};

export { getUsers };
