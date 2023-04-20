import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Coworkings from "./pages/Coworkings";

function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Coworkings" element={<Coworkings/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
