
import type { Route } from "../types/Route";

// Store favourite routes
let favourites: Route[] = [];

// Get all favourites
export function getAllFavourites(): Route[] {
  return [...favourites];
}

// Get one favourite by route number
export function getFavouriteById(
  routeId: number
): Route | undefined {
  return favourites.find((route) => route.id === routeId);
}

// Add a favourite
export function createFavourite(route: Route): void {
  favourites = [...favourites, route];
}

// Update a favourite
export function updateFavourite(updatedRoute: Route): void {
  favourites = favourites.map((route) =>
    route.id === updatedRoute.id ? updatedRoute : route
  );
}

// Remove one favourite
export function deleteFavourite(routeId: number): void {
  favourites = favourites.filter(
    (route) => route.id !== routeId
  );
}

// Remove all favourites
export function deleteAllFavourites(): void {
  favourites = [];
}
