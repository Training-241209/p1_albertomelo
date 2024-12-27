import { createLazyFileRoute, Link } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "@/features/auth/components/login-form";

export const Route = createLazyFileRoute("/_auth/auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center space-y-8 px-4">
      {/* Sleek System Title */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-white bg-clip-text text-transparent tracking-tight text-center drop-shadow-sm">
        Employee Reimbursement System
      </h1>

      {/* Card wrapping the Login Form */}
      <Card className="w-full max-w-md bg-slate-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Login</CardTitle>
          <CardDescription className="text-gray-400">
            Enter your details to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex justify-between text-gray-400">
          <p>Don't have an account?</p>
          <Link to={"/auth/register"} className="underline text-blue-500">
            Register
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
