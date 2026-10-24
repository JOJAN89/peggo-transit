
import { useRouteSearch } from "../../hooks/useRouteSearch";
import { useFavourites } from "../../hooks/useFavourites";
import RouteSearch from "../route-search/RouteSearch";

/**
 * FavouriteRoutes displays saved routes.
 * useFavourites provides shared favourite state and actions.
 * useRouteSearch handles search presentation logic.
 * Business rules and data storage are handled by the
 * favourite service and repository.
 */
function FavouriteRoutes() {
  const {
    favouriteRoutes,
    deleteSavedFavourite,
    clearSavedFavourites,
  } = useFavourites();

  const {
    searchTerm,
    setSearchTerm,
    filteredRoutes,
  } = useRouteSearch(favouriteRoutes);

  return (
    <section className="favourite-routes">
      <h2>Favourite Routes</h2>
      <p>Your saved Winnipeg Transit routes.</p>

      <RouteSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {favouriteRoutes.length === 0 ? (
        <p>No favourite routes added yet.</p>
      ) : (
        <>
          {filteredRoutes.length === 0 ? (
            <p>No matching favourite routes found.</p>
          ) : (
            <ul>
              {filteredRoutes.map((route) => (
                <li key={route.id}>
                  <strong>Route {route.id}</strong> - {route.name} -{" "}
                  {route.destination}

                  <button
                    type="button"
                    onClick={() => deleteSavedFavourite(route.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}

          <button
            type="button"
            onClick={clearSavedFavourites}
          >
            Clear All Favourites
          </button>
        </>
      )}
    </section>
  );
}

export default FavouriteRoutes;
