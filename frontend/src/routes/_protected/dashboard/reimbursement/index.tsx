import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/dashboard/reimbursement/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/dashboard/reimbursement/"!</div>
}
