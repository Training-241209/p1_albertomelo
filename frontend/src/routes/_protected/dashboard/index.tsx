import { useAuth } from '@/features/auth/hooks/use-auth';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
    const { data: user } = useAuth();

    return <div>Hello {user?.fullName}. Click an option to the left!</div>
}
