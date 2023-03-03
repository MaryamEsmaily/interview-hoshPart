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

const useGetUser = (params) => {
  return useQuery(["getUser", params], apiUsers.getUser, {
    enabled: !!params,
  });
};

const usePutUser = () => {
  const queryClient = useQueryClient();
  return useMutation(apiUsers.putUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("getUser");
    },
  });
};

const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation(apiUsers.deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("getUsers");
    },
  });
};

export { useGetUsers, usePostUser, useGetUser, usePutUser, useDeleteUser };
