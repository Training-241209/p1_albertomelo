import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute('/about')({
  component: About,
})

function About() {
  return    <div className="p-8">
  <h1 className="text-2xl font-bold mb-4">About Page</h1>
  <p className="mb-6">This is a test for ShadCN components.</p>
  
  {/* Test ShadCN Button */}
  <Button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
    Test Button
  </Button>
</div>
}