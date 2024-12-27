import { Navbar } from "@/components/shared/navbar";
import {
  Sidebar,
  SidebarChildren,
  SidebarTrigger,
  SidebarWrapper,
} from "@/components/shared/sidebar";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data : user } = useAuth();
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <SidebarWrapper>
          <Sidebar>
            <Link
              href="/dashboard/reimbursement/create"
              className="block py-2 px-4 hover:bg-slate-700"
            >
              Create a New Reimbursement
            </Link>
            <Link
              href="/dashboard/reimbursement/me"
              className="block py-2 px-4 hover:bg-slate-700 mt-4"
            >
              See All My Reimbursements
            </Link>

            {user?.roleName !== "Employee" && (
            <>
              <Link
                href="/dashboard/reimbursement/all"
                className="block py-2 px-4 hover:bg-slate-700 mt-4"
              >
                See All Reimbursements
              </Link>
              <Link
                href="/dashboard/users/all"
                className="block py-2 px-4 hover:bg-slate-700 mt-4"
              >
                See All Users
              </Link>
            </>
          )}
          </Sidebar>
          <SidebarChildren>
            <SidebarTrigger />
          </SidebarChildren>
        </SidebarWrapper>
        <main className="flex-1 flex items-center justify-center bg-gray-800">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
