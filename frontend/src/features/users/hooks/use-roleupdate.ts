import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios-config";
import { toast } from "sonner";

interface UpdateRolePayload {
    userId: number;
  }

export function useUpdateRole() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ userId }: UpdateRolePayload) => {
        const resp = await axiosInstance.patch(`/users/promote/${userId}`);
          return resp.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-users"] });
      toast.success("User promoted.");
    },
    onError: (error) => {
      console.error("Failed to update user's role:", error);
      toast.error("Failed to update user's role.");
    },
  });
}
