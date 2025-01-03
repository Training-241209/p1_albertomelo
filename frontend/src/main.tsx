import { StrictMode } from 'react' //StrictMode in React runs programs Strictly and helps with catching errors earlier for debugging
import ReactDOM from 'react-dom/client' //Allows react to be used in the browser(interact with the DOM)
import { 
  RouterProvider, // --> The router component.. The Traffic Controller
  createRouter //--> Defines a router instance where you define the structure of your routes
} from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen' // --> The automatically generated route tree from Tanstack

import "./input.css"; //--> The CSS file.. set up for ShadCN using Tailwind CSS

document.documentElement.classList.add("dark"); //--> Dark theme ShadCN components

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register { //--> Interface that defines the type of the router
    router: typeof router //TypeGuard usage for typesafety
  }
}

// Render the app
const rootElement = document.getElementById('root')!
//                           ^^^^^^^^^^^^^^ 
//                           The root element
//                           Interaction with the DOM
// Gets the root DOM element (usually `<div id="root"></div>`) where the React app will be mounted.

if (!rootElement.innerHTML) { //<-- Only render the application if innerHTML is empty
  const root = ReactDOM.createRoot(rootElement) // <-- React interacting with the DOM
  // Creates a React root to manage the rendering of your app within the `rootElement`.
  root.render( // <-- Beginning of the rendering of the application
    <StrictMode> 
      <RouterProvider router={router} /> {/*/Just enables the routing in a fancy way */}
    </StrictMode>,
  )
}