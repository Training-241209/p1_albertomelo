import { ReimbursementForm } from '@/features/reimbursement/components/reimbursement-form';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/_protected/dashboard/reimbursement/create/',
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 flex justify-center items-center bg-gray-800 p-8">
      <div className="w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-100 text-center">
          Create a New Reimbursement
        </h2>
        <ReimbursementForm />
      </div>
    </main>
  );
}
