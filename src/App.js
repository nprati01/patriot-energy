import React from "react";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Safety from "./components/Safety/Safety";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About URL={URL}/>
      <Services URL={URL}/>
      <Safety URl={URL}/>
      <Contact URL={URL}/>
      <Footer />

    </div>
  );
}

export default App;
