import { toast } from "sonner";
import { ReimbursementSchema } from "../schemas/reimbursement-schema";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios-config";
import { useRouter } from "@tanstack/react-router";

export function useReimbursement() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (values: ReimbursementSchema) => {
      const resp = await axiosInstance.post("/reimbursement/create", values);
      return resp.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["auth"],
      });
      toast.success("Reimbursement created successfully.");
      router.navigate({ to: "/dashboard" });
    },
    onError: () => {
      toast.error("Failed to create reimbursement.");
    },
  });
}
