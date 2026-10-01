import type { Route } from "../../types/Route";

type BusRoutesProps = {
  onAddFavourite: (route: Route) => void;
};

function BusRoutes({ onAddFavourite }: BusRoutesProps) {
  const routes: Route[] = [
    { id: 11, name: "Portage", destination: "Downtown" },
    { id: 18, name: "North Main", destination: "Garden City" },
    { id: 47, name: "Transcona", destination: "Downtown" },
    { id: 60, name: "Pembina", destination: "University of Manitoba" },
  ];

  return (
    <section className="bus-routes">
      <h2>Bus Routes</h2>
      <p>Explore Winnipeg bus routes.</p>

      <ul>
        {routes.map((route) => (
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
    </section>
  );
}

export default BusRoutes;