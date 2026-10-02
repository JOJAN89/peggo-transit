import { useState } from "react";
import type { Route } from "../../types/Route";
import RouteSearch from "../route-search/RouteSearch";
import AddRouteForm from "../add-route-form/AddRouteForm";

type BusRoutesProps = {
  onAddFavourite: (route: Route) => void;
  favouriteCount: number;
};

function BusRoutes({
  onAddFavourite,
  favouriteCount,
}: BusRoutesProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const [routes, setRoutes] = useState<Route[]>([
    { id: 11, name: "Portage", destination: "Downtown" },
    { id: 18, name: "North Main", destination: "Garden City" },
    { id: 47, name: "Transcona", destination: "Downtown" },
    { id: 60, name: "Pembina", destination: "University of Manitoba" },
  ]);

  function addRoute(newRoute: Route) {
    const routeExists = routes.some(
      (route) => route.id === newRoute.id
    );

    if (routeExists) {
      alert("A route with this number already exists.");
      return;
    }

    setRoutes([...routes, newRoute]);
  }

  const filteredRoutes = routes.filter((route) =>
    `${route.id} ${route.name} ${route.destination}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
  <section className="bus-routes-page">

    <div className="routes-column">
      <h2>Bus Routes</h2>
      <p>Explore Winnipeg bus routes.</p>

      <p>
        <strong>Saved favourites: {favouriteCount}</strong>
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
                onClick={() => onAddFavourite(route)}
              >
                Add to Favourites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>

    <div className="create-route-column">
      <AddRouteForm onAddRoute={addRoute} />
    </div>

  </section>
);
}

export default BusRoutes;