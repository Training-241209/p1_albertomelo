import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios-config";
import { toast } from "sonner";

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userId: number) => {
      const response = await axiosInstance.delete(`/users/delete/${userId}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-users"] });
      toast.success("User deleted successfully.");
    },
    onError: (error) => {
      console.error("Failed to delete user:", error);
      toast.error("Failed to delete user.");
    },
  });
}
