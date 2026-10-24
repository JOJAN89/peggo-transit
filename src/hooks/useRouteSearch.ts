import { useState } from "react";
import type { Route } from "../types/Route";

/**
 * Reusable presentation hook for searching routes.
 *
 * Returns:
 * searchTerm - current search text
 * setSearchTerm - updates the search text
 * filteredRoutes - routes matching the search
 * clearSearch - clears the search input
 */
export function useRouteSearch(routes: Route[]) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRoutes = routes.filter((route) =>
    `${route.id} ${route.name} ${route.destination}`
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase())
  );

  function clearSearch() {
    setSearchTerm("");
  }

  return {
    searchTerm,
    setSearchTerm,
    filteredRoutes,
    clearSearch,
  };
}