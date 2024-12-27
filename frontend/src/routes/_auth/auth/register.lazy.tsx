import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RegisterForm } from "@/features/auth/components/register-form";

export const Route = createLazyFileRoute("/_auth/auth/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center space-y-8 px-4">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-white bg-clip-text text-transparent tracking-tight text-center drop-shadow-sm">
        Employee Reimbursement System
      </h1>

      {/* Card wrapping the Login Form */}
      <Card className="w-full max-w-md bg-slate-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Register</CardTitle>
          <CardDescription className="text-gray-400">
            Enter your details to register an account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className="flex justify-between text-gray-400">
          <p>Already have an account?</p>
          <Link to={"/auth/login"} className="underline text-blue-500">
            Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
