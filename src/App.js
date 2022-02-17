import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from './Pages/About'
import Error from "./Pages/Error";
import Infos from "./Pages/Infos";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/infos/:id" element={<Infos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
