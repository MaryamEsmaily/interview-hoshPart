import * as apiUsers from "@/api/apiUser";
import { useQuery } from "@tanstack/react-query";
//
const useGetUsers = () => {
  return useQuery(["getUsers"], apiUsers.getUsers);
};

export { useGetUsers };
