import { Toaster } from "@/components/ui/sonner"; // <-- Toaster component
import QueryProvider from "@/providers/query-provider"; //<-- Query Provider
/*
What is Query Provider?

It provides a query client to the app and makes the query client available to all components in the app.

What is the Query Client?

Central manager for data fetching and caching in React.

*/

import { createRootRoute, Outlet, useRouter } from "@tanstack/react-router"; // <-- Automatic Tanstack router stuff

import { useEffect } from "react"; // <-- useEffect hook
/*
What is useEffect?

It is a hook that allows you to perform side effects in functional components such as fetching data, updating the DOM, or subscribing to events.
  How can it update the DOM? It uses the ReactDOM library to update the DOM.

  What do you mean by subscribing to events? It means that you can listen for events in the browser and perform actions based on those events.

  How does it fetch data? It uses the fetch function to make a request to a server and get data back.
*/



//Redirects the user to the login page if a route is not found.
const NotFoundRedirect = () => { 
  const router = useRouter(); // <-- Using the router to navigate to the login page

  useEffect(() => { // <-- The side effect is navigating to the login page
    router.navigate({ to: "/auth/login" }); // <-- simple routing
  }, [router]); // <-- ensures it has the correct router instance and reruns if it changes.

  return null; // No UI to render because we are just redirecting back to the login page.
};

export const Route = createRootRoute({
  component: () => (
    <QueryProvider> {/* <-- Using the QueryProvider to provide the query client to the app (all components) */}
      <Outlet /> {/* <-- Using the Outlet to render the child routes | Acts as a placeholder for the child routes*/}
      <Toaster /> {/* <-- Using the Toaster component to display notifications */}
    </QueryProvider>
  ),
  notFoundComponent: NotFoundRedirect, // <-- Redirecting to the login page if a route is not found 
});