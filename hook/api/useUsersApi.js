import * as apiUsers from "@/api/apiUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
//
const useGetUsers = () => {
  return useQuery(["getUsers"], apiUsers.getUsers);
};

const usePostUser = () => {
  const queryClient = useQueryClient();
  return useMutation(apiUsers.postUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("getUsers");
    },
  });
};

export { useGetUsers, usePostUser };
