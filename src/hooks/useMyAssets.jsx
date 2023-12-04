// api, axios (axios secure), tan stack

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useMyAssets = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { refetch, data: myAsset = [] } = useQuery({
    queryKey: ["myasset", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myassets?email=${user.email}`);
      return res.data;
    },
  });

  return [myAsset, refetch];
};

export default useMyAssets;
