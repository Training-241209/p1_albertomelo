import ReimbursementList from '@/features/reimbursement/components/reimbursement-list';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/dashboard/reimbursement/me')({
  component: RouteComponent,
})

function RouteComponent() {
    return ( 
        <main className="flex-1 p-4 flex justify-end items-center h-full">
            <ReimbursementList />
        </main>
      );
}
