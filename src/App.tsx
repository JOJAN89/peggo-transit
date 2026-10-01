import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import BusRoutes from "./components/bus-routes/BusRoutes";
import FavouriteRoutes from "./components/favourite-routes/FavouriteRoutes";
import type { Route as BusRoute } from "./types/Route";

function App() {
  const [favouriteRoutes, setFavouriteRoutes] = useState<BusRoute[]>([]);

  function addFavourite(route: BusRoute) {
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

        <nav>
          <Link to="/">Bus Routes</Link>
          {" | "}
          <Link to="/favourites">Favourite Routes</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <BusRoutes onAddFavourite={addFavourite} />
            }
          />

          <Route
            path="/favourites"
            element={
              <FavouriteRoutes
                favouriteRoutes={favouriteRoutes}
                onRemoveFavourite={removeFavourite}
              />
            }
          />
        </Routes>
      </main>

      <footer>
        <p>PeGGo - Winnipeg Transit | Jojanpreet Kaur</p>
      </footer>
    </>
  );
}

export default App;