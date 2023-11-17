import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponents";


import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import FaqPage from "./pages/FaqPage";
import Contact from "./pages/Contact";
import MitraPage from "./pages/MitraPage";
import InformasiComponent from "./components/InformasiComponent";
import DashboarMitra from "./pages/Mitra/DashboarMitra";


function App() {
  return <div>
    <NavbarComponent/>
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/kelas" Component={KelasPage} />
      <Route path="/faq" Component={FaqPage} />
      <Route path="/kontak" Component={Contact} />
      <Route path="/mitra" Component={MitraPage} />
      <Route path="/informasi" Component={InformasiComponent} />
      <Route path="/dashboard" Component={DashboarMitra} />
    </Routes>
    <FooterComponent/>
  </div>
}

export default App
