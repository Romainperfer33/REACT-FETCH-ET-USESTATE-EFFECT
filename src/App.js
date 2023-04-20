import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Coworkings from "./pages/Coworkings";
import CreateCoworkings from "./pages/CreateCoworkings";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/coworkings" element={<Coworkings/>}/>
        <Route path="/create-coworkings" element={<CreateCoworkings/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
