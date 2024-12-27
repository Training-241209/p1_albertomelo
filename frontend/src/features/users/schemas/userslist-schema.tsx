import { z } from "zod";

export const usersListSchema = z.array(
  z.object({
    userId: z.number(), 
    roleName: z.string(),
    username: z.string(),
    email: z.string(), 
    fullName: z.string(),
  })
);

export type UsersListSchema = z.infer<typeof usersListSchema>;
