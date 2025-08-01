import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  const [Weather, setWeather] = useState();

  return (
    <div className="page">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
