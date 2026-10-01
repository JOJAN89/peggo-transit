function BusRoutes() {
  const routes = [
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
            <strong>Route {route.id}</strong> - {route.name} - {route.destination}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BusRoutes;