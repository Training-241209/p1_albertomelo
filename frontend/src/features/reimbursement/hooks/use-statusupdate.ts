import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios-config";
import { toast } from "sonner";

interface UpdateStatusPayload {
    reimbId: number; // Ensure reimbId is expected
    newStatus: string;
  }

export function useUpdateStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ reimbId, newStatus }: UpdateStatusPayload) => {
        const resp = await axiosInstance.patch(`/reimbursement/status/${reimbId}`, {
            newStatus,
          });
          return resp.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-reimbursements"] });
      toast.success("Reimbursement status updated successfully.");
    },
    onError: (error) => {
      console.error("Failed to update reimbursement status:", error);
      toast.error("Failed to update reimbursement status.");
    },
  });
}
