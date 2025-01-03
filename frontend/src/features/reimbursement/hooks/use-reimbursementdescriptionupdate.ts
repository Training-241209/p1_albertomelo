import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios-config";
import { toast } from "sonner";

interface UpdateDescriptionPayload {
    reimbId: number; // Ensure reimbId is expected
    newDescription: string;
  }

export function useUpdateDescription() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ reimbId, newDescription }: UpdateDescriptionPayload) => {
        const resp = await axiosInstance.patch(`/reimbursement/update/${reimbId}`, {
          newReimbursementDescription: newDescription,
          });
          return resp.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all-reimbursements"] });
      toast.success("Reimbursement description updated successfully.");
    },
    onError: (error) => {
      console.error("Failed to update description:", error);
      toast.error("Failed to update description.");
    },
  });
}
