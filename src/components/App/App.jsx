import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  // Setup API
  const [weather, setWeather] = useState();

  return (
    <div className="page">
      {/* Setup API */}
      <Header weather={weather} />
      <Main weather={weather} />
      <Footer />
    </div>
  );
}

export default App;
