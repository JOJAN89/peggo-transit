
import { useState } from "react";
import type { Route } from "../../types/Route";
import RouteSearch from "../route-search/RouteSearch";
import AddRouteForm from "../add-route-form/AddRouteForm";
import { useRouteSearch } from "../../hooks/useRouteSearch";
import { useFavourites } from "../../hooks/useFavourites";
import { getRoutes, addRoute } from "../../services/routeService";

/**
 * BusRoutes displays bus routes and the creation form.
 * useRouteSearch manages search presentation logic.
 * useFavourites connects to shared favourite state.
 * routeService handles route business rules and data access.
 */
function BusRoutes() {
  const [routes, setRoutes] = useState<Route[]>(() => getRoutes());

  const { favouriteRoutes, saveFavourite } = useFavourites();

  const {
    searchTerm,
    setSearchTerm,
    filteredRoutes,
  } = useRouteSearch(routes);

  function handleAddRoute(newRoute: Route) {
    const error = addRoute(newRoute);

    if (error) {
      alert(error);
      return;
    }

    setRoutes(getRoutes());
  }

  function handleAddFavourite(route: Route) {
    const error = saveFavourite(route);

    if (error) {
      alert(error);
    }
  }

  return (
    <section className="bus-routes-page">
      <div className="routes-column">
        <h2>Bus Routes</h2>
        <p>Explore Winnipeg bus routes.</p>

        <p>
          <strong>Saved favourites: {favouriteRoutes.length}</strong>
        </p>

        <RouteSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {filteredRoutes.length === 0 ? (
          <p>No routes found.</p>
        ) : (
          <ul>
            {filteredRoutes.map((route) => (
              <li key={route.id}>
                <strong>Route {route.id}</strong> - {route.name} -{" "}
                {route.destination}

                <button
                  type="button"
                  onClick={() => handleAddFavourite(route)}
                >
                  Add to Favourites
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="create-route-column">
        <AddRouteForm onAddRoute={handleAddRoute} />
      </div>
    </section>
  );
}

export default BusRoutes;
