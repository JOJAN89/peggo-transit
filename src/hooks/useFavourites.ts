
import { useSyncExternalStore } from "react";
import type { Route } from "../types/Route";

import {
  getFavourites,
  addFavourite,
  removeFavourite,
  clearFavourites,
} from "../services/favouriteService";

// Notify components when favourites change
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

// Keep a stable snapshot for React
let snapshot = getFavourites();

function getSnapshot() {
  return snapshot;
}

function notifyChanges() {
  snapshot = getFavourites();

  listeners.forEach((listener) => listener());
}

/**
 * Connects components to shared favourite state.
 * Business rules stay in favouriteService.
 * Data storage stays in favouriteRepository.
 */
export function useFavourites() {
  const favouriteRoutes = useSyncExternalStore(
    subscribe,
    getSnapshot
  );

  function saveFavourite(route: Route) {
    const error = addFavourite(route);

    if (!error) {
      notifyChanges();
    }

    return error;
  }

  function deleteSavedFavourite(routeId: number) {
    removeFavourite(routeId);
    notifyChanges();
  }

  function clearSavedFavourites() {
    clearFavourites();
    notifyChanges();
  }

  return {
    favouriteRoutes,
    saveFavourite,
    deleteSavedFavourite,
    clearSavedFavourites,
  };
}
