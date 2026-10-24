import type { Route } from "../types/Route";
import { routesData } from "../data/routesData";

let routes: Route[] = [...routesData];

// READ - Get all routes
export function getAllRoutes(): Route[] {
  return [...routes];
}

// READ - Get one route
export function getRouteById(id: number): Route | undefined {
  return routes.find((route) => route.id === id);
}

// CREATE - Add a new route
export function createRoute(route: Route): void {
  routes = [...routes, route];
}

// UPDATE - Update an existing route
export function updateRoute(updatedRoute: Route): void {
  routes = routes.map((route) =>
    route.id === updatedRoute.id ? updatedRoute : route
  );
}

// DELETE - Remove a route
export function deleteRoute(id: number): void {
  routes = routes.filter((route) => route.id !== id);
}