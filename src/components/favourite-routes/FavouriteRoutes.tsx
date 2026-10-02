import type { Route } from "../../types/Route";

type FavouriteRoutesProps = {
  favouriteRoutes: Route[];
  onRemoveFavourite: (routeId: number) => void;
  onClearFavourites: () => void;
};

function FavouriteRoutes({
  favouriteRoutes,
  onRemoveFavourite,
  onClearFavourites,
}: FavouriteRoutesProps) {
  return (
    <section className="favourite-routes">
      <h2>Favourite Routes</h2>
      <p>Your saved Winnipeg Transit routes.</p>

      {favouriteRoutes.length === 0 ? (
        <p>No favourite routes added yet.</p>
      ) : (
        <>
          <ul>
            {favouriteRoutes.map((route) => (
              <li key={route.id}>
                <strong>Route {route.id}</strong> - {route.name} -{" "}
                {route.destination}

                <button
                  type="button"
                  onClick={() => onRemoveFavourite(route.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onClearFavourites}
          >
            Clear All Favourites
          </button>
        </>
      )}
    </section>
  );
}

export default FavouriteRoutes;