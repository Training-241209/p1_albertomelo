import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { reimbursementSchema, ReimbursementSchema } from "../schemas/reimbursement-schema";
import { useReimbursement } from "../hooks/use-reimbursement";

export function ReimbursementForm() {
  const { mutate: reimbursement, isPending } = useReimbursement();

  const form = useForm<ReimbursementSchema>({
    resolver: zodResolver(reimbursementSchema),
    defaultValues: {
      amount: 1,
      description: "",
    },
  });

  function onSubmit(values: ReimbursementSchema) {
    reimbursement(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Amount Field */}
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Amount"
                  {...field}
                  onChange={(e) => field.onChange(e.target.valueAsNumber || 0)}
                  className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-100"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description Field */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <textarea
                  placeholder="Description"
                  {...field}
                  className="w-full h-32 p-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 resize-none focus:ring-2 focus:ring-blue-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Button type="submit" disabled={isPending} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
