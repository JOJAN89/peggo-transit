import { useState } from "react";
import "./App.css";
import BusRoutes from "./components/bus-routes/BusRoutes";
import FavouriteRoutes from "./components/favourite-routes/FavouriteRoutes";
import type { Route } from "./types/Route";

function App() {
  const [favouriteRoutes, setFavouriteRoutes] = useState<Route[]>([]);

  function addFavourite(route: Route) {
    if (!favouriteRoutes.some((item) => item.id === route.id)) {
      setFavouriteRoutes([...favouriteRoutes, route]);
    }
  }

  function removeFavourite(routeId: number) {
    setFavouriteRoutes(
      favouriteRoutes.filter((route) => route.id !== routeId)
    );
  }

  return (
    <>
      <header>
        <h1>PeGGo</h1>
        <p>Winnipeg Transit Tracking</p>
      </header>

      <main>
        <BusRoutes onAddFavourite={addFavourite} />

        <FavouriteRoutes
          favouriteRoutes={favouriteRoutes}
          onRemoveFavourite={removeFavourite}
        />
      </main>

      <footer>
        <p>PeGGo - Winnipeg Transit | Jojanpreet Kaur</p>
      </footer>
    </>
  );
}

export default App;