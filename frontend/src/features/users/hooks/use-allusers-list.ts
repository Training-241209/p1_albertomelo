import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios-config";

import { usersListSchema } from "../schemas/userslist-schema";

export function useAllUsersList() {
  return useQuery({
    queryKey: ["all-users"], 
    queryFn: async () => {
      
      const response = await axiosInstance.get("/users/all");
      
      const data = usersListSchema.parse(response.data);

      return data;
    },
  });
}
