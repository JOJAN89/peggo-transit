
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import BusRoutes from "./components/bus-routes/BusRoutes";
import FavouriteRoutes from "./components/favourite-routes/FavouriteRoutes";

/**
 * App manages navigation between pages.
 * Shared favourite state is handled by useFavourites.
 * Business logic and data access are handled by
 * services and repositories.
 */
function App() {
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
          <Route path="/" element={<BusRoutes />} />

          <Route
            path="/favourites"
            element={<FavouriteRoutes />}
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
