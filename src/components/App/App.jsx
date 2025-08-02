import { useState } from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import { defaultClothingItems } from "../../utils/constants.js";
import "./App.css";

function App() {
  // Setup API
  const [weather, setWeather] = useState();
  const [clothingItem, setClothingItem] = useState(defaultClothingItems);

  return (
    <div className="page">
      {/* Setup API */}
      <Header weather={weather} />
      <Main weather={weather} clothingItem={clothingItem} />
      <Footer />
    </div>
  );
}

export default App;
