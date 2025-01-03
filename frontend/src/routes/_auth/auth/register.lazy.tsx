import { createLazyFileRoute} from "@tanstack/react-router";
import { RegisterForm } from "@/features/auth/components/register-form";
import { TitleHeader } from "@/features/auth/components/title-header";
import { AuthCard } from "@/features/auth/components/auth-card";

export const Route = createLazyFileRoute("/_auth/auth/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center space-y-8 px-4">
      <TitleHeader />
      <AuthCard
        title="Register"
        description="Enter your details to register an account."
        footerText="Already have an account?"
        footerLink={{ text: "Login", to: "/auth/login" }}
      >
        <RegisterForm />
      </AuthCard>
    </div>
  );
}
