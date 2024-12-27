import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useReimbursementList } from "../hooks/use-reimbursement-list";
import { EditDescriptionDialog } from "./description-update";

export function ReimbursementList() {
  const { data, error } = useReimbursementList();

  console.log(error);
  if (error) return <div>Error loading reimbursements</div>;

  if (!data || data.length === 0) {
    return <div>No reimbursements found.</div>;
  }

  return (
    <Table>
      <TableCaption>A list of your reimbursements.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Reimbursement ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Update Description</TableHead>
          <TableHead>User</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((reimbursement) => (
          <TableRow key={reimbursement.reimbId}>
            <TableCell className="font-medium">
              {reimbursement.reimbId}
            </TableCell>
            <TableCell>{reimbursement.status}</TableCell>
            <TableCell>{reimbursement.description}</TableCell>
            <TableCell>
              <EditDescriptionDialog
                reimbursementId={reimbursement.reimbId}
                currentDescription={reimbursement.description}
              />
            </TableCell>
            <TableCell>{reimbursement.user.username}</TableCell>
            <TableCell className="text-right">
              ${reimbursement.amount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ReimbursementList;
