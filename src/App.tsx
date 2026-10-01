import "./App.css";
import BusRoutes from "./components/bus-routes/BusRoutes";
import FavouriteRoutes from "./components/favourite-routes/FavouriteRoutes";

function App() {
  return (
    <>
      <header>
        <h1>PeGGo</h1>
        <p>Winnipeg Transit Tracking</p>
      </header>

      <main>
        <BusRoutes />
        <FavouriteRoutes />
      </main>

      <footer>
        <p>PeGGo - Winnipeg Transit | Jojanpreet Kaur</p>
      </footer>
    </>
  );
}

export default App;