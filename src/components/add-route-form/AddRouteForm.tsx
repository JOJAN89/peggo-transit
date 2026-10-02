import { useState } from "react";
import type { Route } from "../../types/Route";

type AddRouteFormProps = {
  onAddRoute: (route: Route) => void;
};

function AddRouteForm({ onAddRoute }: AddRouteFormProps) {
  const [routeNumber, setRouteNumber] = useState("");
  const [routeName, setRouteName] = useState("");
  const [destination, setDestination] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!routeNumber || !routeName.trim() || !destination.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const number = Number(routeNumber);

    if (!Number.isInteger(number) || number <= 0) {
      setError("Route number must be a positive whole number.");
      return;
    }

    const newRoute: Route = {
      id: number,
      name: routeName.trim(),
      destination: destination.trim(),
    };

    onAddRoute(newRoute);

    setRouteNumber("");
    setRouteName("");
    setDestination("");
    setError("");
  }

  return (
    <section className="add-route-form">
      <h2>Create New Route</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="route-number">Route Number</label>
          <input
            id="route-number"
            type="number"
            value={routeNumber}
            onChange={(event) => setRouteNumber(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="route-name">Route Name</label>
          <input
            id="route-name"
            type="text"
            value={routeName}
            onChange={(event) => setRouteName(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="destination">Destination</label>
          <input
            id="destination"
            type="text"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          />
        </div>

        {error && <p>{error}</p>}

        <button type="submit">Add Route</button>
      </form>
    </section>
  );
}

export default AddRouteForm;