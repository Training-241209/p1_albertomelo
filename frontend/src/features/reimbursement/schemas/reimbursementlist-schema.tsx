import { z } from "zod";

export const reimbursementListSchema = z.array(
  z.object({
    reimbId: z.number(), 
    description: z.string().nullable(),
    amount: z.number(),
    status: z.string(), 
    user: z.object({
      userId: z.number(),
      roleName: z.string(),
      username: z.string(),
      email: z.string(),
      fullName: z.string(),
    }),
  })
);

export type ReimbursementListSchema = z.infer<typeof reimbursementListSchema>;
