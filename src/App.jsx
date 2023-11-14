import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponents";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import Testimonial from "./pages/Testimonial";


function App() {
  return <div>
    <NavbarComponent/>
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/kelas" Component={KelasPage} />
      <Route path="/faq" Component={FaqPage} />
      <Route path="/kontak" Component={SyaratKetenPage} />
      <Route path="/testimonial" Component={Testimonial} />
    </Routes>
    <FooterComponent/>
  </div>
}

export default App
