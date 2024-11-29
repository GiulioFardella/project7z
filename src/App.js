import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";  // Verifica che il percorso sia corretto
import CustomNavbar from "./components/CustomNavbar";
import CustomCarousel from "./components/CustomCarousel";
import DropNav from "./components/DropNav";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <DropNav />
      <h3 className="text-light ms-5 mt-3">VOLEVO FARE LE QUERY PER LE SAGHE MA NON SO SE CI RIUSCIRO'</h3>
      <CustomCarousel />
      <h3 className="text-light ms-5"> INTANTO DOCUMENTARI </h3>
      <CustomCarousel />
      <h3 className="text-light ms-5"> Spider-Man</h3>
      <CustomCarousel />
      <h3 className="text-light ms-5">Suggestions</h3><CustomCarousel />
      <CustomCarousel />
      <h3 className="text-light ms-5">Your Favourites</h3>
      <CustomCarousel />
      <MyFooter/>
    </div>
     
  );
}

export default App;
