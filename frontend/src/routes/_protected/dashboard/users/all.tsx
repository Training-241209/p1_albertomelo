import AllUsersList from '@/features/users/components/allusers-list';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/dashboard/users/all')({
  component: RouteComponent,
})

function RouteComponent() {
    return ( 
        <main className="flex-1 p-4 flex justify-end items-center h-full">
            <AllUsersList />
        </main>
    );
}
