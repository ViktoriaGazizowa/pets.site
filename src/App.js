import Header from "./components/header";
import First from "./components/first";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./page/mainPage";
import Footer2 from "./components/footer2";
import LiKabinet from "./page/LiKabinet";
import Add_pet2 from "./page/Add_pet2";

import Search from "./page/Search";
import Rega from "./components/registration";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
      <div className="w-100">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/LiKabinet" element={<LiKabinet />} />
            <Route path="/Registration" element={<Rega />} />
            <Route path="/Add_pet2" element={<Add_pet2 />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </div>
        <Footer2 />
      </div>
  );
}

export default App;
