// import Header from "./component/Header";
import NavbarTop from "./component/NavbarTop";

import { Routes, Route } from "react-router-dom";
import States from "./pages/States";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./component/Header";
import "./App.css";
import Home from "./pages/Home";
import Novel from "./pages/Novel";
import Komik from "./pages/Komik";
import Horror from "./pages/Horror";
import Ensiklopedia from "./pages/Ensiklopedia";
import Komedi from "./pages/Komedi";
import Fantasi from "./pages/Fantasi";
function App() {
  return (
    <div className="App">
      <NavbarTop />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Novel" element={<Novel />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Home" element={<Header />} />
        <Route path="/Komik" element={<Komik />} />
        <Route path="/Horror" element={<Horror />} />
        <Route path="/Ensiklopedia" element={<Ensiklopedia />} />
        <Route path="/Komedi" element={<Komedi />} />
        <Route path="/Fantasi" element={<Fantasi />} />
        <Route path="/*" element={<h1> Page Not Found </h1>} />
      </Routes>
    </div>
  );
}

export default App;
