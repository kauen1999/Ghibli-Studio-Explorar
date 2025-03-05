import { Routes, Route } from "react-router-dom";
import Films from "./pages/Films";
import People from "./pages/People";
import Locations from "./pages/Locations";
import Vehicles from "./pages/Vehicles";
import Species from "./pages/Species";
import FilmDetails from "./pages/FilmDetails";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/films" element={<Films />} />
      <Route path="/films/:id" element={<FilmDetails />} />
      <Route path="/people" element={<People />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/species" element={<Species />} />
      <Route path="/vehicles" element={<Vehicles />} />
    </Routes>
  );
}

export default App;
