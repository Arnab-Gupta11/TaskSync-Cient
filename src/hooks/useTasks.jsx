import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useTasks = () => {
  const axiosPublic = useAxiosPublic();
  const { user, loading } = useAuth();
  const {
    refetch,
    data: result = [],
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["tasks", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks/${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  return [result, refetch, isLoading, isPending];
};

export default useTasks;
