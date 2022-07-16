import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Episodes from "./components/Episodes/Episodes";
import Characters from "./components/Characters/Characters";
import Locations from "./components/Locations/Locations";
import CharacterPage from "./components/Characters/CharacterCard/CharacterPage";
import EpisodesPage from "./components/Episodes/EpisodesItem/EpisodesPage";
import LocationsPage from "./components/Locations/LocationsPage";
import Test from "./Test";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="Content">
          <Routes>
            <Route path={"/episodes"} element={<Episodes />} />
            <Route path={"/characters"} element={<Characters />} />
            <Route path={"/locations"} element={<Locations />} />
            <Route path={"/characters/:id"} element={<CharacterPage />} />
            <Route path={"/episodes/:id"} element={<EpisodesPage />} />
            <Route path={"/locations/:id"} element={<LocationsPage />} />
            <Route path={"/test"} element={<Test />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
