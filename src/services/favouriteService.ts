
import type { Route } from "../types/Route";

import {
  getAllFavourites,
  getFavouriteById,
  createFavourite,
  deleteFavourite,
  deleteAllFavourites,
} from "../repositories/favouriteRepository";

// Get all saved favourites
export function getFavourites(): Route[] {
  return getAllFavourites();
}

// Add a route to favourites
export function addFavourite(route: Route): string | null {
  if (getFavouriteById(route.id)) {
    return "This route is already in your favourites.";
  }

  createFavourite(route);
  return null;
}

// Remove one favourite
export function removeFavourite(routeId: number): void {
  deleteFavourite(routeId);
}

// Clear all favourites
export function clearFavourites(): void {
  deleteAllFavourites();
}
