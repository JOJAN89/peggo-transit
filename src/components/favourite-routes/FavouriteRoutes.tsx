function FavouriteRoutes() {
  const favouriteRoutes = [
    { id: 11, name: "Portage", destination: "Downtown" },
    { id: 60, name: "Pembina", destination: "University of Manitoba" },
  ];

  return (
    <section className="favourite-routes">
      <h2>Favourite Routes</h2>
      <p>Your saved Winnipeg Transit routes.</p>

      <ul>
        {favouriteRoutes.map((route) => (
          <li key={route.id}>
            <strong>Route {route.id}</strong> - {route.name} - {route.destination}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FavouriteRoutes;