import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";

interface AuthCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  footerText: string;
  footerLink: {
    text: string;
    to: string;
  };
}

export function AuthCard({ title, description, children, footerText, footerLink }: AuthCardProps) {
  return (
    <Card className="w-full max-w-md bg-slate-800 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-white">{title}</CardTitle>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-between text-gray-400">
        <p>{footerText}</p>
        <Link to={footerLink.to} className="underline text-blue-500">
          {footerLink.text}
        </Link>
      </CardFooter>
    </Card>
  );
}
