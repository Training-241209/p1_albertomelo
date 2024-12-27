/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProtectedImport } from './routes/_protected'
import { Route as AuthImport } from './routes/_auth'
import { Route as ProtectedDashboardIndexImport } from './routes/_protected/dashboard/index'
import { Route as ProtectedDashboardReimbursementIndexImport } from './routes/_protected/dashboard/reimbursement/index'
import { Route as ProtectedDashboardUsersAllImport } from './routes/_protected/dashboard/users/all'
import { Route as ProtectedDashboardReimbursementMeImport } from './routes/_protected/dashboard/reimbursement/me'
import { Route as ProtectedDashboardReimbursementAllImport } from './routes/_protected/dashboard/reimbursement/all'
import { Route as ProtectedDashboardReimbursementCreateIndexImport } from './routes/_protected/dashboard/reimbursement/create/index'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const AuthAuthRegisterLazyImport = createFileRoute('/_auth/auth/register')()
const AuthAuthLoginLazyImport = createFileRoute('/_auth/auth/login')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const ProtectedRoute = ProtectedImport.update({
  id: '/_protected',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ProtectedDashboardIndexRoute = ProtectedDashboardIndexImport.update({
  id: '/dashboard/',
  path: '/dashboard/',
  getParentRoute: () => ProtectedRoute,
} as any)

const AuthAuthRegisterLazyRoute = AuthAuthRegisterLazyImport.update({
  id: '/auth/register',
  path: '/auth/register',
  getParentRoute: () => AuthRoute,
} as any).lazy(() =>
  import('./routes/_auth/auth/register.lazy').then((d) => d.Route),
)

const AuthAuthLoginLazyRoute = AuthAuthLoginLazyImport.update({
  id: '/auth/login',
  path: '/auth/login',
  getParentRoute: () => AuthRoute,
} as any).lazy(() =>
  import('./routes/_auth/auth/login.lazy').then((d) => d.Route),
)

const ProtectedDashboardReimbursementIndexRoute =
  ProtectedDashboardReimbursementIndexImport.update({
    id: '/dashboard/reimbursement/',
    path: '/dashboard/reimbursement/',
    getParentRoute: () => ProtectedRoute,
  } as any)

const ProtectedDashboardUsersAllRoute = ProtectedDashboardUsersAllImport.update(
  {
    id: '/dashboard/users/all',
    path: '/dashboard/users/all',
    getParentRoute: () => ProtectedRoute,
  } as any,
)

const ProtectedDashboardReimbursementMeRoute =
  ProtectedDashboardReimbursementMeImport.update({
    id: '/dashboard/reimbursement/me',
    path: '/dashboard/reimbursement/me',
    getParentRoute: () => ProtectedRoute,
  } as any)

const ProtectedDashboardReimbursementAllRoute =
  ProtectedDashboardReimbursementAllImport.update({
    id: '/dashboard/reimbursement/all',
    path: '/dashboard/reimbursement/all',
    getParentRoute: () => ProtectedRoute,
  } as any)

const ProtectedDashboardReimbursementCreateIndexRoute =
  ProtectedDashboardReimbursementCreateIndexImport.update({
    id: '/dashboard/reimbursement/create/',
    path: '/dashboard/reimbursement/create/',
    getParentRoute: () => ProtectedRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_protected': {
      id: '/_protected'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof ProtectedImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/_auth/auth/login': {
      id: '/_auth/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthAuthLoginLazyImport
      parentRoute: typeof AuthImport
    }
    '/_auth/auth/register': {
      id: '/_auth/auth/register'
      path: '/auth/register'
      fullPath: '/auth/register'
      preLoaderRoute: typeof AuthAuthRegisterLazyImport
      parentRoute: typeof AuthImport
    }
    '/_protected/dashboard/': {
      id: '/_protected/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof ProtectedDashboardIndexImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/dashboard/reimbursement/all': {
      id: '/_protected/dashboard/reimbursement/all'
      path: '/dashboard/reimbursement/all'
      fullPath: '/dashboard/reimbursement/all'
      preLoaderRoute: typeof ProtectedDashboardReimbursementAllImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/dashboard/reimbursement/me': {
      id: '/_protected/dashboard/reimbursement/me'
      path: '/dashboard/reimbursement/me'
      fullPath: '/dashboard/reimbursement/me'
      preLoaderRoute: typeof ProtectedDashboardReimbursementMeImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/dashboard/users/all': {
      id: '/_protected/dashboard/users/all'
      path: '/dashboard/users/all'
      fullPath: '/dashboard/users/all'
      preLoaderRoute: typeof ProtectedDashboardUsersAllImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/dashboard/reimbursement/': {
      id: '/_protected/dashboard/reimbursement/'
      path: '/dashboard/reimbursement'
      fullPath: '/dashboard/reimbursement'
      preLoaderRoute: typeof ProtectedDashboardReimbursementIndexImport
      parentRoute: typeof ProtectedImport
    }
    '/_protected/dashboard/reimbursement/create/': {
      id: '/_protected/dashboard/reimbursement/create/'
      path: '/dashboard/reimbursement/create'
      fullPath: '/dashboard/reimbursement/create'
      preLoaderRoute: typeof ProtectedDashboardReimbursementCreateIndexImport
      parentRoute: typeof ProtectedImport
    }
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthAuthLoginLazyRoute: typeof AuthAuthLoginLazyRoute
  AuthAuthRegisterLazyRoute: typeof AuthAuthRegisterLazyRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthAuthLoginLazyRoute: AuthAuthLoginLazyRoute,
  AuthAuthRegisterLazyRoute: AuthAuthRegisterLazyRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

interface ProtectedRouteChildren {
  ProtectedDashboardIndexRoute: typeof ProtectedDashboardIndexRoute
  ProtectedDashboardReimbursementAllRoute: typeof ProtectedDashboardReimbursementAllRoute
  ProtectedDashboardReimbursementMeRoute: typeof ProtectedDashboardReimbursementMeRoute
  ProtectedDashboardUsersAllRoute: typeof ProtectedDashboardUsersAllRoute
  ProtectedDashboardReimbursementIndexRoute: typeof ProtectedDashboardReimbursementIndexRoute
  ProtectedDashboardReimbursementCreateIndexRoute: typeof ProtectedDashboardReimbursementCreateIndexRoute
}

const ProtectedRouteChildren: ProtectedRouteChildren = {
  ProtectedDashboardIndexRoute: ProtectedDashboardIndexRoute,
  ProtectedDashboardReimbursementAllRoute:
    ProtectedDashboardReimbursementAllRoute,
  ProtectedDashboardReimbursementMeRoute:
    ProtectedDashboardReimbursementMeRoute,
  ProtectedDashboardUsersAllRoute: ProtectedDashboardUsersAllRoute,
  ProtectedDashboardReimbursementIndexRoute:
    ProtectedDashboardReimbursementIndexRoute,
  ProtectedDashboardReimbursementCreateIndexRoute:
    ProtectedDashboardReimbursementCreateIndexRoute,
}

const ProtectedRouteWithChildren = ProtectedRoute._addFileChildren(
  ProtectedRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '': typeof ProtectedRouteWithChildren
  '/about': typeof AboutLazyRoute
  '/auth/login': typeof AuthAuthLoginLazyRoute
  '/auth/register': typeof AuthAuthRegisterLazyRoute
  '/dashboard': typeof ProtectedDashboardIndexRoute
  '/dashboard/reimbursement/all': typeof ProtectedDashboardReimbursementAllRoute
  '/dashboard/reimbursement/me': typeof ProtectedDashboardReimbursementMeRoute
  '/dashboard/users/all': typeof ProtectedDashboardUsersAllRoute
  '/dashboard/reimbursement': typeof ProtectedDashboardReimbursementIndexRoute
  '/dashboard/reimbursement/create': typeof ProtectedDashboardReimbursementCreateIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '': typeof ProtectedRouteWithChildren
  '/about': typeof AboutLazyRoute
  '/auth/login': typeof AuthAuthLoginLazyRoute
  '/auth/register': typeof AuthAuthRegisterLazyRoute
  '/dashboard': typeof ProtectedDashboardIndexRoute
  '/dashboard/reimbursement/all': typeof ProtectedDashboardReimbursementAllRoute
  '/dashboard/reimbursement/me': typeof ProtectedDashboardReimbursementMeRoute
  '/dashboard/users/all': typeof ProtectedDashboardUsersAllRoute
  '/dashboard/reimbursement': typeof ProtectedDashboardReimbursementIndexRoute
  '/dashboard/reimbursement/create': typeof ProtectedDashboardReimbursementCreateIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/_auth': typeof AuthRouteWithChildren
  '/_protected': typeof ProtectedRouteWithChildren
  '/about': typeof AboutLazyRoute
  '/_auth/auth/login': typeof AuthAuthLoginLazyRoute
  '/_auth/auth/register': typeof AuthAuthRegisterLazyRoute
  '/_protected/dashboard/': typeof ProtectedDashboardIndexRoute
  '/_protected/dashboard/reimbursement/all': typeof ProtectedDashboardReimbursementAllRoute
  '/_protected/dashboard/reimbursement/me': typeof ProtectedDashboardReimbursementMeRoute
  '/_protected/dashboard/users/all': typeof ProtectedDashboardUsersAllRoute
  '/_protected/dashboard/reimbursement/': typeof ProtectedDashboardReimbursementIndexRoute
  '/_protected/dashboard/reimbursement/create/': typeof ProtectedDashboardReimbursementCreateIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/about'
    | '/auth/login'
    | '/auth/register'
    | '/dashboard'
    | '/dashboard/reimbursement/all'
    | '/dashboard/reimbursement/me'
    | '/dashboard/users/all'
    | '/dashboard/reimbursement'
    | '/dashboard/reimbursement/create'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/about'
    | '/auth/login'
    | '/auth/register'
    | '/dashboard'
    | '/dashboard/reimbursement/all'
    | '/dashboard/reimbursement/me'
    | '/dashboard/users/all'
    | '/dashboard/reimbursement'
    | '/dashboard/reimbursement/create'
  id:
    | '__root__'
    | '/'
    | '/_auth'
    | '/_protected'
    | '/about'
    | '/_auth/auth/login'
    | '/_auth/auth/register'
    | '/_protected/dashboard/'
    | '/_protected/dashboard/reimbursement/all'
    | '/_protected/dashboard/reimbursement/me'
    | '/_protected/dashboard/users/all'
    | '/_protected/dashboard/reimbursement/'
    | '/_protected/dashboard/reimbursement/create/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AuthRoute: typeof AuthRouteWithChildren
  ProtectedRoute: typeof ProtectedRouteWithChildren
  AboutLazyRoute: typeof AboutLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AuthRoute: AuthRouteWithChildren,
  ProtectedRoute: ProtectedRouteWithChildren,
  AboutLazyRoute: AboutLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_auth",
        "/_protected",
        "/about"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/auth/login",
        "/_auth/auth/register"
      ]
    },
    "/_protected": {
      "filePath": "_protected.tsx",
      "children": [
        "/_protected/dashboard/",
        "/_protected/dashboard/reimbursement/all",
        "/_protected/dashboard/reimbursement/me",
        "/_protected/dashboard/users/all",
        "/_protected/dashboard/reimbursement/",
        "/_protected/dashboard/reimbursement/create/"
      ]
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/_auth/auth/login": {
      "filePath": "_auth/auth/login.lazy.tsx",
      "parent": "/_auth"
    },
    "/_auth/auth/register": {
      "filePath": "_auth/auth/register.lazy.tsx",
      "parent": "/_auth"
    },
    "/_protected/dashboard/": {
      "filePath": "_protected/dashboard/index.tsx",
      "parent": "/_protected"
    },
    "/_protected/dashboard/reimbursement/all": {
      "filePath": "_protected/dashboard/reimbursement/all.tsx",
      "parent": "/_protected"
    },
    "/_protected/dashboard/reimbursement/me": {
      "filePath": "_protected/dashboard/reimbursement/me.tsx",
      "parent": "/_protected"
    },
    "/_protected/dashboard/users/all": {
      "filePath": "_protected/dashboard/users/all.tsx",
      "parent": "/_protected"
    },
    "/_protected/dashboard/reimbursement/": {
      "filePath": "_protected/dashboard/reimbursement/index.tsx",
      "parent": "/_protected"
    },
    "/_protected/dashboard/reimbursement/create/": {
      "filePath": "_protected/dashboard/reimbursement/create/index.tsx",
      "parent": "/_protected"
    }
  }
}
ROUTE_MANIFEST_END */