import { useState } from "react";
import type { Route } from "../../types/Route";

type BusRoutesProps = {
  onAddFavourite: (route: Route) => void;
};

function BusRoutes({ onAddFavourite }: BusRoutesProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const routes: Route[] = [
    { id: 11, name: "Portage", destination: "Downtown" },
    { id: 18, name: "North Main", destination: "Garden City" },
    { id: 47, name: "Transcona", destination: "Downtown" },
    { id: 60, name: "Pembina", destination: "University of Manitoba" },
  ];

  const filteredRoutes = routes.filter((route) =>
    `${route.id} ${route.name} ${route.destination}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bus-routes">
      <h2>Bus Routes</h2>
      <p>Explore Winnipeg bus routes.</p>

      <input
        type="text"
        placeholder="Search routes"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {searchTerm && (
        <button
          type="button"
          onClick={() => setSearchTerm("")}
        >
          Clear Search
        </button>
      )}

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
    </section>
  );
}

export default BusRoutes;