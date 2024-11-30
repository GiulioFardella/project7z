import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";  // Verifica che il percorso sia corretto
import CustomNavbar from "./components/CustomNavbar";
import CustomCarousel from "./components/CustomCarousel";
import DropNav from "./components/DropNav";
import MyFooter from "./components/MyFooter";
import LOTRcarousel from "./components/LOTRcarousel";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <DropNav />
      <h3 className="text-light ms-5">Suggestions</h3><CustomCarousel />
   
      <h3 className="text-light ms-5 mt-3">BATMAN '' ho provato a fare un test per le query ma mi escono solo questi results </h3>
      <LOTRcarousel filterKeyword="Batman" />
      <h3 className="text-light ms-5">Suggestions</h3>
      <CustomCarousel />
      <h3 className="text-light ms-5"> Simpsons </h3>
      <LOTRcarousel filterKeyword="The Simpsons" />
      
      <h3 className="text-light ms-5">Your Favourites</h3>
      <CustomCarousel />
      <MyFooter/>
    </div>
     
  );
}

export default App;
