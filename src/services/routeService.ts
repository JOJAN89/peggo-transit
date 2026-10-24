import type { Route } from "../types/Route";
import {
  getAllRoutes,
  getRouteById,
  createRoute,
  updateRoute,
  deleteRoute,
} from "../repositories/routeRepository";

// Get all bus routes
export function getRoutes(): Route[] {
  return getAllRoutes();
}

// Add a new bus route with validation
export function addRoute(route: Route): string | null {
  if (!Number.isInteger(route.id) || route.id <= 0) {
    return "Route number must be a positive whole number.";
  }

  if (!route.name.trim() || !route.destination.trim()) {
    return "Please fill in all fields.";
  }

  if (getRouteById(route.id)) {
    return "This route number already exists.";
  }

  createRoute(route);
  return null;
}

// Update a route
export function editRoute(route: Route): string | null {
  if (!getRouteById(route.id)) {
    return "Route not found.";
  }

  if (!route.name.trim() || !route.destination.trim()) {
    return "Please fill in all fields.";
  }

  updateRoute(route);
  return null;
}

// Delete a route
export function removeRoute(id: number): void {
  deleteRoute(id);
}