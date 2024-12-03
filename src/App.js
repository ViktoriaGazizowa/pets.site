import Header from "./components/header";
import first from "./components/first";
import First from "./components/first";
import {Routes, Route} from "react-router-dom";
import MainPage from "./page/mainPage";
import qwe from "./page/qwe.css"
import Footer2 from "./components/footer2";
import LiKabinet from "./page/LiKabinet";
import Add_pet2 from "./page/Add_pet2";
import Poisk from "./components/poisk";
function App() {
  return (
    <div className="w-100">
    <Header />
    <div >
      <Routes> 
        <Route path="/" element={<MainPage />} />
        <Route path="/LiKabinet" element={<LiKabinet />} />
        <Route path="/Add_pet2" element={<Add_pet2 />} />
         <Route path="/Search" element={<Poisk />} /> 
      </Routes>
    </div>
    <Footer2 /> 
  </div>
  );
}

export default App;
