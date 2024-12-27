import { z } from "zod";

export const reimbursementSchema = z.object({
  amount: z
    .number()
    .positive("Amount must be greater than 0"),
  description: z
    .string()
    .min(1, "Description is required")
});

export type ReimbursementSchema = z.infer<typeof reimbursementSchema>;