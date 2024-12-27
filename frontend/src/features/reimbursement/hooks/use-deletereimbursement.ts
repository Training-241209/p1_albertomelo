import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios-config";
import { toast } from "sonner";

export function useDeleteReimbursement() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (reimbId: number) => {
      const response = await axiosInstance.delete(`/reimbursement/delete/${reimbId}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-reimbursements"] });
      toast.success("Reimbursement deleted successfully.");
    },
    onError: (error) => {
      console.error("Failed to reimbursement:", error);
      toast.error("Failed to delete reimbursement.");
    },
  });
}
