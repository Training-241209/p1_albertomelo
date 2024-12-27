import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios-config";

import { reimbursementListSchema } from "../schemas/reimbursementlist-schema";

export function useAllReimbursementList() {
  return useQuery({
    queryKey: ["all-reimbursements"], 
    queryFn: async () => {
      
      const response = await axiosInstance.get("/reimbursement/all");
      
      const data = reimbursementListSchema.parse(response.data);

      console.log("API Response:", data);
      return data;
    },
  });
}
