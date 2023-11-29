import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponents";
import SidebarComponent from "./components/DasboardMitraComponent"; // Import SidebarComponent

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import FaqPage from "./pages/FaqPage";
import Contact from "./pages/Contact";
import MitraPage from "./pages/MitraPage";
import InformasiComponent from "./components/InformasiComponent";
import DashboarMitra from "./pages/Mitra/DashboarMitra"
import DataPesananPage from "./pages/Mitra/DataPesananPage";
import RiwayatPage from "./pages/Mitra/RiwayatPage";
import JenisLayananPage from "./pages/Mitra/JenisLayananPage";
import PemesananPage from "./pages/PemesananPage";
import ProfileUserPage from "./pages/ProfileUserPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kelas" element={<KelasPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/mitra" element={<MitraPage />} />
        <Route path="/informasi" element={<InformasiComponent />} />
        <Route path="/pemesanan" element={<PemesananPage />} />
        <Route path="/profile" element={<ProfileUserPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* SidebarComponent ditampilkan di halaman berikut */}
        <Route
          path="/mitra/dashboard"
          element={
            <>
              <SidebarComponent />
              <DashboarMitra />
            </>
          }
        />
        <Route
          path="/mitra/datapesanan"
          element={
            <>
              <SidebarComponent />
              <DataPesananPage />
            </>
          }
        />
        <Route
          path="/mitra/jenislayanan"
          element={
            <>
              <SidebarComponent />
              <JenisLayananPage />
            </>
          }
        />
        <Route
          path="/mitra/riwayat"
          element={
            <>
              <SidebarComponent />
              <RiwayatPage />
            </>
          }
        />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
